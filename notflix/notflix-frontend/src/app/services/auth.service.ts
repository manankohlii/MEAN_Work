import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5566/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signin`, { email, password }).pipe(
      tap(response => {
        if (response && response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('role', response.role);
        }
      }),
      catchError(error => {
        console.error('Login error', error);
        return of(null);
      })
    );
  }

  checkEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/check-email`, { email });
  }

  signUp(email: string, password: string, username: string, tmdbKey: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, { email, password, username, tmdbKey, role });
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
