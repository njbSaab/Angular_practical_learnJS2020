import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public validators = [Validators.required]

  public  signupForm = this.fb.group({
    username: ['', this.validators],
    email: this.fb.control('', this.validators),
    password: this.fb.group(
      {
        password: ['', this.validators],
        cpassword: ['', this.validators]
      }
    )
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  public signup(formValue: any){
      console.log(formValue)
  }

}
