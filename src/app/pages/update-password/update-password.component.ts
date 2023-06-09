import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthError, AuthResponse } from '@supabase/supabase-js';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent {
  updateSuccess = false;
  requestErrorMessage='';
  credentials = this.fb.nonNullable.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private modalService: NgbModal) {}

  // TODO:
  async updatePassword(modal) {
    console.log(this.credentials.getRawValue().password)
    const data = await this.authService.updateUser({password: this.credentials.getRawValue().password});
    if(data.error){
      console.log('ERROR UPDATING PASSWORD',data.error.message);
      this.requestErrorHandler(data.error);
    }else{
      this.updateSuccess = true;

      console.log('Password successfully updated')
    }
    this.modalService.open(modal);
  }

  requestErrorHandler(error: AuthError) {
    console.log(error.message);
    this.requestErrorMessage = '';

    if (error.status == 429) {
      this.requestErrorMessage = 'Too many requests! ';
    }
    this.updateSuccess = false;
    this.requestErrorMessage += error.message;
  }
}
