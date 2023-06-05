import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarOpen = false;
  user = this.authService.getCurrentUser();

  constructor(private authService: AuthService) {}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  signOut() {
    this.authService.signOut();
  }
}
