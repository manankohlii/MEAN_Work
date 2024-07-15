import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: any;
  loading: boolean = false;

  constructor(private router: Router) {}

  goToDetails(movieId: number) {
    this.loading = true;
    // Simulate a delay to show the spinner
    setTimeout(() => {
      this.router.navigate(['/movie', movieId]);
    }, 1000); // Replace this with the actual data fetching delay
  }
}
