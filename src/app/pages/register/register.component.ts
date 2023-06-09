import { Component, OnInit } from '@angular/core';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthError } from '@supabase/supabase-js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  requestErrorMessage = '';
  regSuccess = false;
  credentials = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  get email() {
    return this.credentials.controls.email;
  }

  get password() {
    return this.credentials.controls.password;
  }

  async createAccount(modal) {
    // TODO: Add loading spinner

    const data = await this.authService.signUp(this.credentials.getRawValue());

    // TODO REMOVE THIS AND MAKE IT AN ERROR POPUP
    if (data.error) {
      console.log('REGISTRATION FAILED');
      this.regSuccess = false;

      this.requestErrorHandler(data.error);
    } else {
      //TODO ADD POP UP FOR SUCCESS
      // Signup succcess confirm email! text
      this.regSuccess = true;
      // navigate back to home
      console.log('REGISTRATION SUCCESS');
    }
    this.modalService.open(modal);

  }

  requestErrorHandler(error: AuthError) {
    console.log(error.message);
    this.requestErrorMessage = '';

    if (error.status == 429) {
      this.requestErrorMessage = 'Too many requests! ';
    }
    this.regSuccess = false;
    this.requestErrorMessage += error.message;
  }

}
