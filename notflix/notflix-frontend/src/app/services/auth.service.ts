import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5566/api/v1/auth';
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signin`, { email, password }).pipe(
      tap(response => {
        if (response && response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('role', response.role);
          localStorage.setItem('userEmail', email);
          this.loggedIn.next(true);
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
    localStorage.removeItem('userEmail');
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }
}
