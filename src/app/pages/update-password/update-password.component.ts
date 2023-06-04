import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent {
  credentials = this.fb.nonNullable.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  // TODO:
  async updatePassword() {
    console.log(this.credentials.getRawValue().password)
    const data = await this.authService.updateUser({password: this.credentials.getRawValue().password});
    if(data.error){
      console.log('ERROR UPDATING PASSWORD',data.error.message)
    }else{
      console.log('Password successfully updated')
    }
  }
}
