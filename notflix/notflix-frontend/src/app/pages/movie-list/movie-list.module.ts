import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MovieListComponent }
    ])
  ]
})
export class MovieListModule {}
