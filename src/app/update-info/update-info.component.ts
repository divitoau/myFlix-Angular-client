import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})

export class UpdateInfoComponent {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UpdateInfoComponent>,
    public snackBar: MatSnackBar) { }

  updateUser(): void {
    this.fetchApiData.updateUserInfo(this.userData).subscribe((response) => {
      this.dialogRef.close();
      localStorage.setItem("user", JSON.stringify(response));
      console.log(response);
      this.snackBar.open(response.Username + "'s information updated", 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log(response);
      this.snackBar.open('Sorry, an error has occured. Please try again later', 'OK', {
        duration: 2000
      });
    });
  }
}
