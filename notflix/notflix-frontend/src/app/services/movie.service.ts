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
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjY4NTkxNzhiNWZjZTJmMDFmYTE0MmM0NWYwYzE0ZiIsIm5iZiI6MTcyMDQ3MTY1OC4xOTQ3LCJzdWIiOiI2Njg0ZTE1OGE5YWU3Mjc2ZmE4MThmNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yZTPKFSPENgfsLIUviXjdbbTnbMXfWtuk9YHVi_j66o";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get<{ results: Movie[] }>(this.apiUrl, { headers }).pipe(
      map(response => response.results)
    );
  }
}
