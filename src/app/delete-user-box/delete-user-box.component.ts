import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-delete-user-box',
  templateUrl: './delete-user-box.component.html',
  styleUrls: ['./delete-user-box.component.scss']
})
export class DeleteUserBoxComponent {

  user: any = localStorage.getItem("user");

  constructor(
    public router: Router,
    public snackBar: MatSnackBar,
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<DeleteUserBoxComponent>) { }

  /**
   * Makes an API call to delete user, then removes user and token from local storage and navigatese back to welcome screen
   */
  deleteUser(): void {
    this.fetchApiData.deleteUser().subscribe(() => {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      this.router.navigate(['welcome'])
      this.dialogRef.close();
      this.snackBar.open(this.user.Username + "Account deleted", 'OK', {
        duration: 2000
      });
    }, () => {
      console.log();
      this.snackBar.open('Sorry, an error has occured. Please try again later', 'OK', {
        duration: 2000
      });
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
