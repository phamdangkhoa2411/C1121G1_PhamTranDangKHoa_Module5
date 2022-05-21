import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';
import {position} from '../../models/position';
import {Education} from '../../models/Education';
import {Division} from '../../models/Division';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList :Employee[] =[] ;
  positionList: position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];


  name: string = '';
  address: string = '';
  division: string = '';
  position: string = '';
  education: string = '';
  paginNation: number ;

  constructor(private employeeService: EmployeeService,
              private  dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.employeeService.getAllPosition().subscribe(value => {
      this.positionList = value;
      this.employeeService.getAllEducation().subscribe(value => {
        this.educationList = value;
        this.employeeService.getAllDivision().subscribe(value => {
          this.divisionList = value;
          this.getSearch();
        });
      });

    });

  }


  openDialog(id): void {
    this.dialog.open(DeleteEmployeeComponent, {
        width: '400px',
        height: '600',
        data: id,
      }
    );

  }




  getSearch() {
    this.dialog.afterAllClosed.subscribe(() => {
      this.search();

    });
  }

  clear() {
    this.name = '';
    this.address = '';
    this.division = '';
    this.position = '';
    this.education = '';
    this.search();

  }


  search() {
    this.paginNation = 0;
    this.employeeService.searchEmployee(this.name, this.address, this.position, this.education, this.division, this.paginNation).subscribe(value => {
      //truy cập đến thuộc tính content dưới data để lấy ra cái dữ liệu trong pageAble
      this.employeeList = value['content'] ;
      console.log(this.employeeList);
    });
  }

  nextPage() {
        this.paginNation = this.paginNation + 1  ;
    this.employeeService.searchEmployee(this.name, this.address, this.position, this.education, this.division, this.paginNation).subscribe(value => {
      //truy cập đến thuộc tính content dưới data để lấy ra cái dữ liệu trong pageAble
      this.employeeList = value['content'] ;
    });
  }

  backPage() {
    this.paginNation = this.paginNation - 1  ;
    this.employeeService.searchEmployee(this.name, this.address, this.position, this.education, this.division, this.paginNation).subscribe(value => {
      //truy cập đến thuộc tính content dưới data để lấy ra cái dữ liệu trong pageAble
      this.employeeList = value['content'] ;
    });
  }
}
