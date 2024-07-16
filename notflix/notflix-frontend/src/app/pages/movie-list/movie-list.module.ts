import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    SharedModule,
    InfiniteScrollModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MovieListComponent }
    ])
  ]
})
export class MovieListModule {}
