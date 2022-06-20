import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {FacilityService} from "../../services/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  services: Service[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.facilityService.getAll().subscribe(services => {
      this.services = services;
    })
  }
}
