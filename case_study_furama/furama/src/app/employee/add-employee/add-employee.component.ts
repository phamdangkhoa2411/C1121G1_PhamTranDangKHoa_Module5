import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../models/employee';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {position} from '../../models/position';
import {Education} from '../../models/Education';
import {Division} from '../../models/Division';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    // id: new FormControl('',Validators.required),
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-z A-Z]{1,50}$/)]),
    birthDay: new FormControl('', [Validators.required, this.checkAge]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9,10}$')]),
    salary: new FormControl('', [Validators.required, this.checkSalary]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(84+|0)(90|91)[0-9]{7}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    flagDeleteCustomer: new FormControl('1')
  });


  employee: Employee;
  positionList: position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];
  flagValid = false;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private  toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducation();
    this.getAllDivision();
  }


  getAllPosition() {
    this.employeeService.getAllPosition().subscribe(value => {
      this.positionList = value;
    });
  }

  getAllEducation() {
    this.employeeService.getAllEducation().subscribe(value => {
      this.educationList = value;
    });
  }

  getAllDivision() {
    this.employeeService.getAllDivision().subscribe(value => {
      this.divisionList = value;
    });
  }


  addEmployee() {
    if (this.employeeForm.invalid) {
      this.flagValid = true;
      this.toast.error(this.employeeForm.value.name, 'Vĩnh Biệt Cụ !!!',
        {
          timeOut: 2000,
          progressBar: true
        });
    } else {
      this.employee = this.employeeForm.value;
      this.employeeService.saveEmployee(this.employee).subscribe(() => {
        Swal.fire(
          'Thêm Mới Thành Công!',
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
    const salary = Number(control.value);
    return salary >= 500000 ? null : {salaryCode: true};
  }
}
