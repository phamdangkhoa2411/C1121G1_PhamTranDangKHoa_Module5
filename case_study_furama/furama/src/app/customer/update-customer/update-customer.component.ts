import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id: number;
  customer: FormGroup;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private  toast: ToastrService) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomerById(this.id);
      this.customer = new FormGroup({
        id: new FormControl(customer.id ,Validators.required),
        name: new FormControl(customer.name ,[Validators.required,Validators.pattern(/^[a-z A-Z]{1,50}$/)]),
        birthday: new FormControl(customer.dayOfBirth ,[Validators.required]),
        gender: new FormControl(customer.gender ,[Validators.required]),
        phone: new FormControl(customer.phone ,[Validators.required , Validators.pattern( /^(84+|0)(90|91)[0-9]{7}$/)]),
        email: new FormControl(customer.email ,[Validators.required,Validators.email]),
        adress: new FormControl(customer.adress , Validators.required),
        type: new FormControl(customer.type,Validators.required)
      });
    });

  }

  getCustomerById(id: number) {
    return this.customerService.findById(id);
  }


  updateCustomer(id: number) {

    const customer = this.customer.value;
    this.customerService.updateCustomer(id, customer);
    console.log(customer);
    this.toast.success(this.customer.value.name, 'Đã Sửa Thành Công',
      {
        timeOut: 1000,
        progressBar: true
      });

    this.router.navigateByUrl('/customer');
  }
}
