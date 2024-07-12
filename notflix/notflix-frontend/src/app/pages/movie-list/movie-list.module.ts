import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MovieListComponent }
    ])
  ]
})
export class MovieListModule {}
