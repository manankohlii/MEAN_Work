import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
//import { RegisterComponent } from './components/register/register.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  { path: 'movies', component: MovieListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
