import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Division} from '../../models/Division';
import {Education} from '../../models/Education';
import {position} from '../../models/position';
import Swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;

  employeeForm = this.fb.group({
    id: [''],
    name: ['',[Validators.required,Validators.pattern(/^[a-z A-Z]{1,50}$/)]],
    birthDay: ['',[Validators.required , this.checkAge]],
    idCard: ['',[Validators.required, Validators.pattern('^\\d{9,10}$')]],
    salary: ['' ,[Validators.required, this.checkSalary]],
    phone: ['',[Validators.required , Validators.pattern( /^(84+|0)(90|91)[0-9]{7}$/)]],
    email: ['',[Validators.required,Validators.email]],
    address: ['',Validators.required],
    division: ['',Validators.required],
    education: ['',Validators.required],
    position: ['',Validators.required],
    flagDeleteCustomer:['1']
  });
  positionList: position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];
  flagValid = false;


  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router : Router,
              private  toast : ToastrService) {
  }

  ngOnInit(): void {
    this.employeeService.getAllPosition().subscribe(value => {
      this.positionList = value;

      this.employeeService.getAllEducation().subscribe(value => {
        this.educationList = value;

        this.employeeService.getAllDivision().subscribe(value => {
          this.divisionList = value;

          this.id = this.activatedRoute.snapshot.params.id;
          return this.employeeService.findById(this.id).subscribe(employee => {
            this.employeeForm.setValue(employee);
          });

        });
      });

    });
  }


  updateEmployee(id: number) {
    if (this.employeeForm.invalid){
      this.flagValid = true;
      this.toast.error( this.employeeForm.value.name, "Bạn Chưa Nhập Đầy Đủ Hoặc Có Lỗi Xảy Ra" ,
        {
          timeOut : 2000 ,
          progressBar : true
        })
    }else {
      this.employee = this.employeeForm.value;
      this.employeeService.updateEmployee(id ,  this.employee).subscribe(()=>{
        Swal.fire(
          'Sửa Thành Công!',
          this.employeeForm.value.name,
          'success'
        );
        this.router.navigateByUrl('/employee');
      });
    }

  }

  checkAge(control: AbstractControl): any {
    const yearAge = Number(control.value.substr(0, 4));
    const yearCur = new Date().getFullYear();
    return yearCur - yearAge >= 18 ? null : {checkAge: true};
  }
  checkSalary(control: AbstractControl): any {
    const  salary = Number(control.value);
    return salary >= 500000 ? null : {salaryCode : true};
  }
}
