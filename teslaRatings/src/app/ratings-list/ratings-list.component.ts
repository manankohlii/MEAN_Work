import { Component, Input } from '@angular/core';
import { Rating } from '../interfaces/rating';
import { RatingComponent } from '../rating/rating.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-ratings-list',
  standalone: true,
  imports: [RatingComponent, CommonModule],
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.scss']
})
export class RatingsListComponent {
  @Input() ratings!: Rating[];
}
