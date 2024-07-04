// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'; // Import SharedModule

@NgModule({
  declarations: [
    AppComponent,
    // Remove NavbarComponent from here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule // Import SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
