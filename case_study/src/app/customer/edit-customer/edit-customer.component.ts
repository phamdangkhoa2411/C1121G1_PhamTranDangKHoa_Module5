import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerType} from "../customer-type";
import {CustomerTypeService} from "../../services/customer-type.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerTypes: CustomerType[];
  customer: Customer;
  customers: Customer[];

  editCustomerForm: FormGroup = new FormGroup({
    customerId: new FormControl(""),

    customerCode: new FormControl(""),

    customerName: new FormControl(""),

    customerBirthday: new FormControl(""),

    customerGender: new FormControl(""),

    customerIdCard: new FormControl(""),

    customerPhone: new FormControl(""),

    customerEmail: new FormControl(""),

    customerAddress: new FormControl(""),

    customerType: new FormControl(""),
  })

  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);


    });

  }

  ngOnInit() {
    this.getAllCustomerType();
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id, this.customer).subscribe(customer => {
      console.log(customer)

      this.editCustomerForm = new FormGroup({
        customerId: new FormControl(customer.customerId),
        customerCode: new FormControl(customer.customerCode, [Validators.required,
          Validators.pattern('^KH-[\\d]{4}')]),
        customerName: new FormControl(customer.customerName, [Validators.required,
          Validators.pattern('^[^\\d]+$')]),
        customerBirthday: new FormControl(customer.customerBirthday, Validators.required),
        customerGender: new FormControl(customer.customerGender+"", Validators.required),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required,
          Validators.pattern('^\\d{9}$|\\d{12}$')]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required,
          Validators.pattern('^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$')]),
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
        customerAddress: new FormControl(customer.customerAddress, Validators.required),
        customerType: new FormControl(customer.customerType, Validators.required),
      });
    });

  }

  updateCustomer(id: number) {
    const customer = this.editCustomerForm.value;
    console.log(customer)
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/customer/list');
    }, error => {
      console.log(error);
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }
}

