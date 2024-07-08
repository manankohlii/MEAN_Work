import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }
}
