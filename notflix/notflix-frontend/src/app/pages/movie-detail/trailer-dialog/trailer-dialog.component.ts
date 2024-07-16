import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trailer-dialog',
  templateUrl: './trailer-dialog.component.html',
  styleUrls: ['./trailer-dialog.component.scss']
})
export class TrailerDialogComponent {
  trailers: any[];
  currentTrailerIndex: number;

  constructor(
    public dialogRef: MatDialogRef<TrailerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.trailers = data.trailers;
    this.currentTrailerIndex = data.currentTrailerIndex;
  }

  get currentTrailerKey(): string {
    return this.trailers[this.currentTrailerIndex].key;
  }

  prevTrailer(): void {
    if (this.currentTrailerIndex > 0) {
      this.currentTrailerIndex--;
    }
  }

  nextTrailer(): void {
    if (this.currentTrailerIndex < this.trailers.length - 1) {
      this.currentTrailerIndex++;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
