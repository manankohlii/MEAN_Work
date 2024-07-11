import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from './trailer-dialog/trailer-dialog.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  trailerKey: string | null = null;

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
        const trailer = data.results.find((video: any) => video.type === 'Trailer');
        this.trailerKey = trailer ? trailer.key : null;
      });
    }
  }
  

  openTrailer(): void {
    this.dialog.open(TrailerDialogComponent, {
      data: { trailerKey: this.trailerKey }
    });
  }
}
