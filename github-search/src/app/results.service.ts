import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private resultsSubject = new BehaviorSubject<any[]>([]);
  private filterSubject = new BehaviorSubject<string>('');

  results$ = combineLatest([
    this.resultsSubject.asObservable(),
    this.filterSubject.asObservable()
  ]).pipe(
    map(([results, filterText]) =>
      results.filter(result =>
        result.login.includes(filterText) ||
        result.id.toString().includes(filterText) ||
        result.html_url.includes(filterText)
      )
    )
  );

  setResults(results: any[]) {
    this.resultsSubject.next(results);
  }

  setFilter(filterText: string) {
    this.filterSubject.next(filterText);
  }
}
