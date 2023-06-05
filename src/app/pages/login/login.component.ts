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
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  pwReq = this.fb.nonNullable.group({
    email: ['', Validators.required],
  });
  magicModal = this.fb.nonNullable.group({
    email: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        console.log('USER ON LOGIN PAGE: ', user);
        this.router.navigateByUrl('/account', { replaceUrl: true });
      }
    });
  }

  get email() {
    return this.credentials.controls.email;
  }
  get password() {
    return this.credentials.controls.password;
  }

  displayStyle = 'none';
  displayMagicModal = 'none';
  showSuccess = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    this.displayMagicModal = 'none';
  }
  hideSuccess() {
    this.showSuccess = 'none';
  }
  
  ngOnInit(): void {}

  async login() {
    this.authService
      .signIn(this.credentials.getRawValue())
      .then(async (data) => {
        if (data.error) {
          loginFailed(data);
        }
      });
  }
  forgotPw() {
    this.displayStyle = 'block';
    return;
  }
  getMagicLink() {
    this.displayMagicModal = 'block';
    return;
  }

  async sendMagicLink(){
    console.log(this.magicModal.getRawValue().email);
    const data = await this.authService.signInWIthEmail(this.magicModal.getRawValue().email)
    if (data.error) {
      loginFailed(data);
    }else{
      this.showSuccess = 'block';
      setTimeout(this.hideSuccess,1500);
    }
  }
  async sendPwResetRequest() {
    console.log(this.pwReq.getRawValue().email);
    const data = await this.authService.sendPwReset(this.pwReq.getRawValue().email)
    if (data.error) {
      pwReqFailed(data);
    }else{
      this.showSuccess = 'block';
      setTimeout(this.hideSuccess,1500);

    }
  }
}
function loginFailed(data) {
  console.log('LOGIN FAILED', data.error.message);
}

function pwReqFailed(data) {
  console.log('PASSWORD REQU FAILED', data.error.message);
}

