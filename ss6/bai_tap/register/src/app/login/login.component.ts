import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
  email: new FormControl('',[Validators.email,Validators.required]),
  passWord: new FormControl('' , [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
  });

  get email() {
    return this.loginForm.get('email')
  }

  get passWord() {
    return this.loginForm.get('passWord')
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
