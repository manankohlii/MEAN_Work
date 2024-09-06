import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GiphyComponent } from './giphy/giphy.component';
import 'zone.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GiphyComponent, HttpClientModule, CommonModule],
  template: `<app-giphy></app-giphy>`,
})
export class App {}

bootstrapApplication(App);
