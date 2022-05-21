import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Route, Router, Routes} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl('',Validators.required),
    dayOfBirth: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required,Validators.pattern(/^[a-z A-Z]{1,50}$/)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required , Validators.pattern( /^(84+|0)(90|91)[0-9]{7}$/)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    adress: new FormControl("",Validators.required),
    type: new FormControl("",Validators.required)

  });

  constructor(private  customerService: CustomerService,
              private route: Router ,
              private  toast : ToastrService) {
  }


  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.toast.success( this.customerForm.value.name, "Đã Thêm Mới Thành Công" ,
      {
        timeOut : 1000 ,
        progressBar : true
      })

    this.route.navigateByUrl('/customer');
  }

}
