// src/app/item/item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonColor: string = '';
  @Input() isSelected: boolean = false;

  @Output() itemClicked = new EventEmitter<void>();

  onClick() {
    this.itemClicked.emit();
  }
}
