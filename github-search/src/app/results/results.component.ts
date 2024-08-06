import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public results: any[] = [];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.results$.subscribe(results => {
      this.results = results;
    });
  }
}
