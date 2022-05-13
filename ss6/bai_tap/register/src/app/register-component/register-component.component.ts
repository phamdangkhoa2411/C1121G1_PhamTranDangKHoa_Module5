import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  // email, password, confirmPassword, country, age, gender, phone

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),

    // sử dụng custom validate
    passWord: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),


    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(90)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern("((09|03|07|08|05)+([0-9]{8})\\b)")])
  });

  // sử dụng custom validate
  checkPass() {
  let pw  = this.registerForm.get('passWord').value;
  let confirmPass = this.registerForm.get('confirmPassword').value;
  if (pw !== confirmPass){
    this.registerForm.get('confirmPassword').setErrors({'check' :true}) ;
  }


  }


  get email() {
    return this.registerForm.get('email')
  }



  get passWord() {
    return this.registerForm.get('passWord')
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')
  }

  get country() {
    return this.registerForm.get('country')
  }

  get age() {
    return this.registerForm.get('age')
  }

  get gender() {
    return this.registerForm.get('gender')
  }

  get phone() {
    return this.registerForm.get('phone')
  }


  countryList = [
    {
      id: 1,
      name: 'đà nẵng'
    },
    {
      id: 2,
      name: 'đà lạt'
    },
    {
      id: 3,
      name: 'sài gòn'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }


  onSubmit() {
  }
}
