import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: any;

  constructor(private router: Router) {}

  goToDetails(movieId: number) {
    this.router.navigate(['/movie',this.movie.id]);
  }
}
