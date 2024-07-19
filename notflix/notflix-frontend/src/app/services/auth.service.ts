import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5566/api/v1/auth';

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post<{ accessToken: string, role: string }>(`${this.baseUrl}/signin`, { email, password })
      .pipe(map(response => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('role', response.role);
        return response;
      }));
  }
}
