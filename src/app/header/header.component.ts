import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public router: Router) { }


  goToProfile(): void {
    this.router.navigate(['profile'])
  }

  goToHome(): void {
    this.router.navigate(['movies'])
  }

  logoutUser(): void {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    this.router.navigate(['welcome'])
  }
}
