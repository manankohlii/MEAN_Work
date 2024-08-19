import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../interfaces/rating';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-average-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.scss']
})
export class AverageRatingComponent implements OnInit {
  @Input() ratings!: Rating[];
  filledStars!: number;
  emptyStars!: number;

  ngOnInit(): void {
    const rates = this.ratings.map(r => r.rate);
    const average = rates.reduce((acc, rate) => acc + rate, 0) / rates.length;
    this.filledStars = Math.round(average);
    this.emptyStars = 5 - this.filledStars;
  }

  getRange(count: number) {
    return Array(count).fill(0);
  }
}
