import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from '../movie-detail/trailer-dialog/trailer-dialog.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  trailers: any[] = [];
  trailerIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.movieService.getMovieDetails(id).subscribe(data => {
        this.movie = data;
      });
  
      this.movieService.getMovieVideos(id).subscribe(data => {
        this.trailers = data.results.filter((video: any) => video.site === 'YouTube');
      });
    }
  }
  
  openTrailer(): void {
    if (this.trailers.length > 0) {
      this.dialog.open(TrailerDialogComponent, {
        data: {
          trailers: this.trailers,
          currentTrailerIndex: this.trailerIndex
        }
      });
    }
  }
}
