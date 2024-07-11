// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieItemComponent } from './pages/movie-item/movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { TrailerDialogComponent } from './pages/movie-detail/trailer-dialog/trailer-dialog.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieListComponent,
    RegisterComponent,
    HomeComponent,
    MovieItemComponent,
    MovieDetailComponent,
    TrailerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
