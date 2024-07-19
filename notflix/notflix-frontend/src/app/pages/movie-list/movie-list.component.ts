import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { ScrollService } from '../../services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, AfterViewInit, OnDestroy {
  movies: any[] = [];
  page: number = 1;
  private routerSubscription!: Subscription;  

  constructor(private movieService: MovieService, private scrollService: ScrollService, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  ngAfterViewInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/') {
        const savedScrollPosition = this.scrollService.getScrollPosition('/');
        window.scrollTo(0, savedScrollPosition);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadMovies(): void {
    this.movieService.getMovies(this.page).subscribe((data: any[]) => {
      this.movies = [...this.movies, ...data];
    });
  }

  onScroll(): void {
    this.page++;
    this.loadMovies();
  }
}
