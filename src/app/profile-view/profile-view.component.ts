import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UpdateInfoComponent } from '../update-info/update-info.component';
import { DeleteUserBoxComponent } from '../delete-user-box/delete-user-box.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})

export class ProfileViewComponent implements OnInit {

  user: any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    let userString: any = localStorage.getItem("user")
    this.user = JSON.parse(userString)
  }

  openUpdateUserDialog(): void {
    this.dialog.open(UpdateInfoComponent, {
      width: '280px'
    });
  }

  openDeleteUser(): void {
    this.dialog.open(DeleteUserBoxComponent, {
      width: '280px'
    });
  }
}
