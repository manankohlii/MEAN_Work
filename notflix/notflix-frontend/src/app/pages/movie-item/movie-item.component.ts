import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: any;
  loading: boolean = false;

  constructor(private router: Router, private scrollService: ScrollService) {}

  goToDetails(movieId: number) {
    this.loading = true;

    // Record the current scroll position before navigating
    const currentScrollPosition = window.scrollY;
    this.scrollService.setScrollPosition(this.router.url, currentScrollPosition);

    // Simulate a delay to show the spinner
    setTimeout(() => {
      this.router.navigate(['/movie', movieId]);
    }, 1000); // Replace this with the actual data fetching delay
  }
}
