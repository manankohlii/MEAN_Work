import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'movies', loadChildren: () => import('./pages/movie-list/movie-list.module').then(m => m.MovieListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
