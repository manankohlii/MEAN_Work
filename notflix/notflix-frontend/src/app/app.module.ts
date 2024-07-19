import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { TrailerDialogComponent } from './pages/movie-detail/trailer-dialog/trailer-dialog.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AuthService } from './services/auth.service';

export function initApp(authService: AuthService) {
  return () => authService.isLoggedIn$.subscribe();
}

@NgModule({
  declarations: [   
    AppComponent,
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
    MatDialogModule,
    InfiniteScrollModule
  ],
  providers: [
    AuthService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [AuthService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
