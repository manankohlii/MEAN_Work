import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() name!: string;
  @Input() content!: string;
  @Input() rate!: number;
  filledStars!: number;
  emptyStars!: number;

  ngOnInit(): void {
    this.filledStars = Math.round(this.rate);
    this.emptyStars = 5 - this.filledStars;
  }

  getRange(count: number) {
    return Array(count).fill(0);
  }
}
