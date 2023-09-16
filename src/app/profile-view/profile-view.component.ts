import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  user: any

  ngOnInit(): void {
    let userString: any = localStorage.getItem("user")
    this.user = JSON.parse(userString)
  }
}
