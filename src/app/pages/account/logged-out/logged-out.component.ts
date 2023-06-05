import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.scss']
})
export class LoggedOutComponent {
  constructor(private router: Router){}
  goLogin(){
    this.router.navigate(['/']);
  }
}
