import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceType} from '../../models/ServiceType';
import {RentType} from '../../models/RentType';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../models/service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
      serviceForm: FormGroup = new FormGroup({
        id : new FormControl(''),
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
      })

  serviceTypeList: ServiceType[] = [];
      rentTypeList: RentType[] = [];
      service: Service
   id: number;
  constructor(private serviceService : ServiceService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
          this.serviceService.getAllServiceType().subscribe(value => {
                  this.serviceTypeList = value;
                    this.serviceService.getAllRentType().subscribe(value => {
                        this.rentTypeList = value;
                          this.id = this.activatedRoute.snapshot.params.id;
                               return this.serviceService.findById(this.id).subscribe(service=>{
                                    this.serviceForm.setValue(service);
                                 console.log(this.service);
                               })
          })
    })
  }


  updateService(id: number) {
      this.service = this.serviceForm.value;
      this.serviceService.updateService(id,this.service).subscribe(()=>{
        Swal.fire(
          'Sửa Thành Công!',
          this.serviceForm.value.name,
          'success'
        );
        this.router.navigateByUrl('/service');
      });

  }
}
