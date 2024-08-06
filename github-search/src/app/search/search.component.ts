import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public username: string = '';
  public filterText: string = ''; // New filter text field
  public errorMessage: string = '';

  constructor(private http: HttpClient, private resultsService: ResultsService) { }

  onSearch() {
    if (/^[a-zA-Z0-9-]+$/.test(this.username)) {
      this.errorMessage = '';
      this.http.get(`https://api.github.com/search/users?q=${this.username}`).subscribe(
        (data: any) => {
          this.resultsService.setResults(data.items);
        },
        (error) => {
          this.errorMessage = 'Error fetching results from GitHub API.';
        }
      );
    } else {
      this.errorMessage = 'Invalid username. Only alphanumeric characters and hyphens are allowed.';
    }
  }

  onFilterChange() {
    this.resultsService.setFilter(this.filterText);
  }
}
