import { Component, Input, OnInit } from '@angular/core';

interface Rating {
  name: string;
  content: string;
  rate: number;
}

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.scss']
})
export class AverageRatingComponent implements OnInit {
  @Input() ratings: Rating[] = [];
  averageRate: number = 0;

  ngOnInit(): void {
    const total = this.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    this.averageRate = Math.ceil(total / this.ratings.length);
  }

  get filledStars(): number[] {
    return Array(Math.floor(this.averageRate));
  }

  get emptyStars(): number[] {
    return Array(5 - Math.floor(this.averageRate));
  }
}
