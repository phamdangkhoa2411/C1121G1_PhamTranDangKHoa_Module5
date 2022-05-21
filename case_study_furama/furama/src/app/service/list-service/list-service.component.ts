import {Component, OnInit} from '@angular/core';
import {Service} from '../../models/service';
import {ServiceService} from '../../services/service.service';
import {RentType} from '../../models/RentType';
import {ServiceType} from '../../models/ServiceType';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmployeeComponent} from '../../employee/delete-employee/delete-employee.component';
import {DeleteServiceComponent} from '../delete-service/delete-service.component';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  serviceList: Service[] = [];
  rentTypeList: RentType[] = [];
  serviceTypeList: ServiceType[] = [];
  p : number=1;


  constructor(private serviceService: ServiceService,
              private  dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.serviceService.getAllRentType().subscribe(value => {
      this.rentTypeList = value;
      this.serviceService.getAllServiceType().subscribe(value => {
        this.serviceTypeList = value;
              this.searchService();
      });
    });
  }


  openDialog(id): void {
    this.dialog.open(DeleteServiceComponent, {
        width: '400px',
        height: '600',
        data: id,
      }
    );
  }

//   this.serviceService.getAllService().subscribe(value => {
//   this.serviceList = value;
//   console.log(this.serviceList);
// })
  name: string = '';
  rentType: string = '';
  serviceType: string='';

  searchService() {
    this.dialog.afterAllClosed.subscribe(()=>{
      this.search();
    })

  }

  clear() {
    this.name = '';
    this.rentType='';
    this.serviceType='';
    this.search();

  }

  search(){
    this.serviceService.searchAllService(this.name,this.rentType,this.serviceType).subscribe(value => {
      this.serviceList = value;
      this.p = 0;
    })
  }
}
