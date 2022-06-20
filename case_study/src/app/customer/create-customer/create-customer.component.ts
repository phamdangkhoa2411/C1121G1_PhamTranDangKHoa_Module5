import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm : FormGroup = new FormGroup({

    customerCode : new FormControl("", [Validators.required, Validators.pattern('^KH-[\\d]{4}')]),
    customerName : new FormControl("", [Validators.required, Validators.pattern('^[^\\d]+$')]),
    customerBirthday : new FormControl("", Validators.required),
    customerGender : new FormControl("", Validators.required),
    customerIdCard : new FormControl("", [Validators.required, Validators.pattern('^\\d{9}$|\\d{12}$')]),
    customerPhone : new FormControl("", [Validators.required, Validators.pattern('^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$')]),
    customerEmail : new FormControl("", [Validators.required, Validators.email]),
    customerAddress : new FormControl("", Validators.required),
    customerType : new FormControl("", Validators.required),
  })

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  customerTypeList = [
    {id : 1, name : 'Diamond'},
    {id : 2, name : 'Platinum'},
    {id : 3, name : 'Gold'},
    {id : 4, name : 'Silver'},
    {id : 5, name : 'Member'},
  ];

  submitCreateCustomer() {
    const customer = this.createCustomerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      alert("Thêm mới thành công !");
      this.createCustomerForm.reset();
    }, error => console.log(error));
  }
}
