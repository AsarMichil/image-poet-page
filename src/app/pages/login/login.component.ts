import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthError, AuthResponse } from '@supabase/supabase-js';

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
  emailRequest = this.fb.nonNullable.group({
    email: ['', Validators.required],
  });

  requestSent = false;
  requestError = false;
  requestErrorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
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

  async sendMagicLink() {
    console.log(this.emailRequest.getRawValue().email);
    const data = await this.authService.signInWIthEmail(
      this.emailRequest.getRawValue().email
    );
    if (data.error) {
      this.requestErrorHandler(data.error);
    } else {
      this.requestSent = true;
    }
  }
  async sendPwResetRequest() {
    console.log(this.emailRequest.getRawValue().email);
    const data = await this.authService.sendPwReset(
      this.emailRequest.getRawValue().email
    );
    if (data.error) {
      this.requestErrorHandler(data.error);
    } else {
      this.requestSent = true;
    }
  }
  openModal(modal) {
    this.requestSent = false;
    this.requestError = false;
    this.requestErrorMessage = '';
    this.modalService.open(modal);
  }
  requestErrorHandler(error: AuthError) {
    console.log(error.message);
    if (error.status == 429) {
      this.requestErrorMessage = 'Too many requests! ';
    }
    this.requestError = true;
    this.requestErrorMessage += error.message;
  }
}
function loginFailed(data: AuthResponse) {
  console.log('LOGIN FAILED', data.error.message);
}

function pwReqFailed(data) {
  console.log('PASSWORD REQU FAILED', data.error.message);
}
