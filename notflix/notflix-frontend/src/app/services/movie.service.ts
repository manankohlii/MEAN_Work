// src/app/services/movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjY4NTkxNzhiNWZjZTJmMDFmYTE0MmM0NWYwYzE0ZiIsIm5iZiI6MTcyMDQ3MTY1OC4xOTQ3LCJzdWIiOiI2Njg0ZTE1OGE5YWU3Mjc2ZmE4MThmNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yZTPKFSPENgfsLIUviXjdbbTnbMXfWtuk9YHVi_j66o";

  constructor(private http: HttpClient) {}

  getMovies(page: number): Observable<Movie[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get<{ results: Movie[] }>(`${this.apiUrl}/discover/movie?page=${page}`, { headers }).pipe(
      map(response => response.results)
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Accept': 'application/json'
    });

    return this.http.get<any>(url, { headers });
  }

  getMovieVideos(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get<{ results: any[] }>(`${this.apiUrl}/movie/${id}/videos?language=en-US`, { headers }).pipe(
      map(response => response.results)
    );
  }
}
