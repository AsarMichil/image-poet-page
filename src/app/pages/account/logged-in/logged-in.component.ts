import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss'],
})
export class LoggedInComponent {
  constructor(private authService: AuthService) {}
  signOut() {
    this.authService.signOut();
  }
}
