import {Component, Inject, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../models/employee';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {position} from '../../models/position';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

    employee = new Employee();
    id: number;


  constructor(private employeeService : EmployeeService,
              private activatedRoute: ActivatedRoute,
              private  toast : ToastrService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<DeleteEmployeeComponent>,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
      this.employeeService.findById(this.data).subscribe(value => {
             this.employee = value;

    });


  }
  onNoClick(): void {
    this.dialog.close();
  }

  deleteEmployee() {
      this.employeeService.deleteEmployee(this.employee).subscribe(()=>{
        this.dialog.close();
        this.toast.error( this.employee.name, "Đã Xóa Thành Công" ,
          {
            timeOut : 1000 ,
            progressBar : true
          })
      });
  }
}
