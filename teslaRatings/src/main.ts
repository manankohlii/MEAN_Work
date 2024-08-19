import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Rating } from './app/interfaces/rating';
import { RatingsListComponent } from './app/ratings-list/ratings-list.component';
import { AverageRatingComponent } from './app/average-rating/average-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RatingsListComponent, AverageRatingComponent],
  template: `
    <div class="app-container">
      <app-ratings-list [ratings]="ratingData"></app-ratings-list>
      <app-average-rating [ratings]="ratingData"></app-average-rating>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
  `]
})
export class App {
  ratingData: Rating[] = [
    { name: 'Todd Aaron', content: 'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.', rate: 4 },
    { name: 'Jesse Bing', content: 'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.', rate: 1 },
    { name: 'Tori Mitchell', content: 'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.', rate: 2 },
    { name: 'John Nelson', content: 'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.', rate: 4 },
  ];
}

bootstrapApplication(App);
