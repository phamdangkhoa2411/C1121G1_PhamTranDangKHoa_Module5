import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [{
    id: 1,
    nameCustomer: 'chiến tm',
    birthdayCustomer: '27/06/1996',
    genderCustomer: 'nam',
    idCardCustomer: '123456789',
    phoneCustomer: '0987654321' ,
    emailCustomer: 'chientran@gmail.com',
    addressCustomer: 'quảng trị',
    customerType : 'Diamond'
  }, {
    id: 1,
    nameCustomer: 'chiến tm',
    birthdayCustomer: '27/06/1996',
    genderCustomer: 'nam',
    idCardCustomer: '123456789',
    phoneCustomer: '0987654321' ,
    emailCustomer: 'chientran@gmail.com',
    addressCustomer: 'quảng trị',
    customerType : 'Diamond'
  }];
  constructor() { }
  getAll() {
    return this.customerList;
  }

  saveCustomer(customer) {
    this.customerList.push(customer);
  }
}
