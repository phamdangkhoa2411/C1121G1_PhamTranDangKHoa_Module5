import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^$|(KH-)[0-9]{4}')]),
    customerName: new FormControl('', Validators.required),
    customerDateOfBirth: new FormControl('', Validators.required),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerTypeId: new FormControl('', Validators.required),
  });

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  submitCustomer(){
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
    console.log(customer);
    this.router.navigate( [ '/customer']);
  }
}
