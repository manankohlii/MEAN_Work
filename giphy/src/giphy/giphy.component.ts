import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-giphy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Giphy Search</h1>
    <input (input)="onInput($event)" placeholder="Search GIFs" />
    <button (click)="onSearch()">Search</button>

    <div *ngIf="gifs.length > 0" class="results">
      <div *ngFor="let gif of gifs" class="gif-card">
        <h3>{{ gif.title }}</h3>
        <img [src]="gif.images.original.url" alt="{{ gif.title }}" />
      </div>
    </div>

    <div *ngIf="isLoading">Loading...</div>
    <div *ngIf="gifs.length === 0 && !isLoading">No results found</div>
  `,
})
export class GiphyComponent {
  searchTerm: string = ''; 
  gifs: any[] = [];
  isLoading = false;

  constructor(private giphyService: GiphyService) {}

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  onSearch() {
    if (this.searchTerm.trim() === '') {
      return;
    }

    this.isLoading = true;
    this.giphyService.searchGifs(this.searchTerm).subscribe({
      next: (response) => {
        this.gifs = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching GIFs:', err);
        this.isLoading = false;
      },
    });
  }
}
