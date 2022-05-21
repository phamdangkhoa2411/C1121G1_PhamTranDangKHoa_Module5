import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    private customerList: Customer[] =[
      {
        id : 1 ,
        dayOfBirth : "2000-02-01",
        name: 'Đoàn Ngọc Tài',

        gender: true,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Nam Phước",
        type : "Diamond"
      },
      {
        id : 2 ,
        dayOfBirth : "2000-02-01",
        name: 'Huỳnh Minh Ca',

        gender: true,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Trà Mỹ",
        type : "Platinium"
      },
      {
        id : 3 ,
        dayOfBirth : "2000-02-01",
        name: 'Bùi Thị Huyền',
        gender: false,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Gia Lai",
        type : "Gold"
      },
      {
        id : 4 ,
        dayOfBirth : "2000-02-01",
        name: 'Nguyễn Minh Tài',
        gender: true,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Hội An",
        type : "Silver"
      },
      {
        id : 5,
        dayOfBirth : "2000-02-01",
        name: 'Nguyễn Thành Nhân',
        gender: true,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Đà Nẵng",
        type : "Member"
      },
      {
        id : 6 ,
        dayOfBirth : "2000-02-01",
        name: 'Vũ Trọng Dương',
        gender: true,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Tam Kỳ",
        type : "Diamond"
      },
      {
        id : 7 ,
        dayOfBirth : "2000-02-01",
        name: 'Đạt Trần Công',
        gender: false,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Vũng Tàu",
        type : "Member"
      },
      {
        id : 8 ,
        dayOfBirth : "2000-02-01",
        name: 'Nguyễn Cu Từ',
        gender: false,
        email: "doantai@gmail.com",
        phone: 98343434,
        adress: "Quảng Trị",
        type : "Diamond"
      },
    ]

  constructor() { }


  getAllCustomer(){
      return this.customerList;
  }

  saveCustomer(customer){
      this.customerList.push(customer);
  }


  findById(id :number){
      return this.customerList.find(customer => customer.id === id);
  }


  updateCustomer(id : number , customer : Customer){
      for (let i = 0 ; i < this.customerList.length ; i++){
            if (this.customerList[i].id === id){
              this.customerList[i] = customer;
            }
      }
  }


  deleteCustomer(id : number){
    for (let i = 0 ; i < this.customerList.length ; i++){
      if (this.customerList[i].id === id){
        this.customerList.splice(id - 1 ,1);
      }
    }
  }
}
