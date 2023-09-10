import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public value = '';

  ngOnInit(): void {
    console.log(this.value)
  }

  public login(formValue:any){
      console.log(formValue)
  }

}
