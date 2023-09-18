import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis-dialog',
  templateUrl: './synopsis-dialog.component.html',
  styleUrls: ['./synopsis-dialog.component.scss']
})
export class SynopsisDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SynopsisDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { header: any, content: any }) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
