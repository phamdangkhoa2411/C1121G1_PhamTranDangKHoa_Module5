import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../models/customer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
      customer : Customer;
  constructor(private customerService: CustomerService ,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<DeleteCustomerComponent>,
              private  toast : ToastrService) { }

  ngOnInit(): void {
     this.customer = this.customerService.findById(this.data);
  }
  onNoClick(): void {
    this.dialog.close();
  }

  deleteCustomer(id : number){
        this.customerService.deleteCustomer(id);
        this.dialog.close();
    this.toast.error( this.customer.name, "Đã Xóa Thành Công" ,
      {
        timeOut : 1000 ,
        progressBar : true
      })


  }

}
