import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  createServiceForm : FormGroup = new FormGroup({
    serviceCode : new FormControl("", [Validators.required, Validators.pattern('^DV-[\\d]{4}')]),
    serviceName : new FormControl("", Validators.required),
    serviceArea : new FormControl("", [Validators.required, Validators.min(0)]),
    serviceCost : new FormControl("", [Validators.required, Validators.min(0)]),
    serviceMaxPeople : new FormControl("", [Validators.required, Validators.min(0)]),
    roomStandard : new FormControl("", Validators.required),
    descriptionOtherConvenience : new FormControl("", Validators.required),
    poolArea : new FormControl("", Validators.min(0)),
    numberOfFloors : new FormControl("", Validators.min(0)),
    serviceType : new FormControl("", Validators.required),
    rentType : new FormControl("", Validators.required),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  standardList = [
    {id : 1, name : 'Vip'},
    {id : 2, name : 'Normal'}
  ];

  rentTypeList = [
    {id: 1, name : 'year'},
    {id: 2, name : 'month'},
    {id: 3, name : 'day'},
    {id: 4, name : 'house'}
  ]

  submitCreateService() {
    console.log(this.createServiceForm);
  }

}
