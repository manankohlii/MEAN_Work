import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trailer-dialog',
  templateUrl: './trailer-dialog.component.html',
  styleUrls: ['./trailer-dialog.component.scss']
})
export class TrailerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { trailerKey: string }) {}
}
