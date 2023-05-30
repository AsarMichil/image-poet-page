

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials = this.fb.nonNullable.group({
    email: ['asarmichil@gmail.com', Validators.required],
    password: ['123456', Validators.required],
  });
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.getCurrentUser().subscribe((user) =>{
      if(user){
        console.log('USER ON LOGIN PAGE: ', user);
        this.router.navigateByUrl('/groups', {replaceUrl: true});
      }
    });
  }

  get email() {
    return this.credentials.controls.email;
  }
  get password() {
    return this.credentials.controls.password;
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit(): void {}

  async login() {
    this.authService
    .signIn(this.credentials.getRawValue())
    .then(async(data) =>{
      if(data.error){
        loginFailed(data);
      }
    });
  }
  forgotPw() {
    this.displayStyle="block";
    return;
  }
  async getMagicLink() {
    return true;
  }
  async sendPwResetRequest(){
    console.log(await this.authService.sendPwReset(this.credentials.controls.email));
    
  }

 

}
function loginFailed(data) {
  console.log('LOGIN FAILED', data.error.message);
}

