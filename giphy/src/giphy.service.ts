import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private apiKey = 'Di8ACwzkI1osbGZNriUPpDYef8ykcIfO';
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {}

  searchGifs(query: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${encodeURIComponent(query)}`;
    return this.http.get<any>(url);
  }
}
