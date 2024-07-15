import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<any> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const movieId = route.paramMap.get('id');
    return this.movieService.getMovieDetails(Number(movieId));
  }
}
