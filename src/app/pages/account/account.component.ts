import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  loggedIn = true;
  constructor(private authService: AuthService) {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        console.log('USER ON ACCOUNT PAGE: ', user);
        this.loggedIn = true;

      }else{
        this.loggedIn = false;
      }
    });
  }
}
