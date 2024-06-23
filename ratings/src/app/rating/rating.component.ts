import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() name: string = '';
  @Input() content: string = '';
  @Input() rate: number = 0;

  get filledStars(): number[] {
    return Array(Math.floor(this.rate));
  }

  get emptyStars(): number[] {
    return Array(5 - Math.floor(this.rate));
  }
}
