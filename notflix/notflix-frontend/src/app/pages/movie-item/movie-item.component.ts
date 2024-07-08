import { Component, Input } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
}
