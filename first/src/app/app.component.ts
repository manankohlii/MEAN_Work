import { Component, OnInit } from '@angular/core';
import { ITEMS, Item } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Item[] = ITEMS;
  selectedTitle: string = '';
  selectedColor: string = '';

  ngOnInit() {
    this.selectItem(0);
  }

  selectItem(index: number) {
    this.selectedTitle = this.items[index].title;
    this.selectedColor = this.items[index].buttonColor;
    this.items.forEach((item, i) => {
      item.isSelected = i === index;
    });
  }
}
