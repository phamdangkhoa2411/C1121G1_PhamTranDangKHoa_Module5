import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService,
              private  dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAllCustomer();
  }


  openDialog(id): void {
    this.dialog.open(DeleteCustomerComponent, {
      width: '400px',
      height:'500px',
      data: id
    });
  }



}
