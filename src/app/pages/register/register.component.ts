import { Component, OnInit } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  credentials = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

get email(){
  return this.credentials.controls.email;
}

get password(){
  return this.credentials.controls.password;
}


async createAccount(){
// TODO: Add loading spinner

const data = await this.authService.signUp(this.credentials.getRawValue())

// TODO REMOVE THIS AND MAKE IT AN ERROR POPUP
if(data.error){
  console.log('REGISTRATION FAILED')
}else{
  //TODO ADD POP UP FOR SUCCESS
  // Signup succcess confirm email! text

  // navigate back to home
  console.log('REGISTRATION SUCCESS')
  this.router.navigate(['/']);

}

}


}
