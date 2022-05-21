import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {ServiceType} from '../../models/ServiceType';
import {RentType} from '../../models/RentType';
import {FormControl, FormGroup} from '@angular/forms';
import {Service} from '../../models/service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  serviceTypeList: ServiceType[] = [];
  rentTypeList: RentType[] = [];


  serviceForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    area: new FormControl(''),
    cost: new FormControl(''),
    maxPeople: new FormControl(''),
    standardRoom: new FormControl(''),
    description: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    rentType: new FormControl(''),
    serviceType: new FormControl(''),
    flagDeleteService: new FormControl("1")

  });

  service: Service;

  constructor(private  serviceService: ServiceService,
              private router : Router) {
  }


  ngOnInit(): void {
    this.getAllServiceType();
    this.getAllRentType();

  }


  getAllServiceType() {
    return this.serviceService.getAllServiceType().subscribe(value => {
      this.serviceTypeList = value;
    });
  }

  getAllRentType() {
    return this.serviceService.getAllRentType().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  addService() {
        this.service = this.serviceForm.value;
        this.serviceService.saveService(this.service).subscribe(()=>{
          Swal.fire(
            'Thêm Mới Thành Công!',
            this.serviceForm.value.name,
            'success'
          );
          this.router.navigateByUrl('/service');
        });
  }
}
