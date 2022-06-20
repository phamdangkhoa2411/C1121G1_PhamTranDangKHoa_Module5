import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Customer} from "../../customer/customer";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {Contract} from "../contract";
import {FacilityService} from "../../services/facility.service";
import {ContractService} from "../../services/contract.service";
import {Service} from "../../service/service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  customers: Customer[];
  services: Service[];
  contract: Contract;

  createContractForm : FormGroup = new FormGroup({

    contractCode: new FormControl("", [Validators.required, Validators.pattern('^HD-[\\d]{4}')]),
    startDate: new FormControl("", Validators.required),
    endDate: new FormControl("", Validators.required),
    contractDeposit: new FormControl("", [Validators.required, Validators.min(0)]),
    totalMoney: new FormControl("", [Validators.required, Validators.min(0)]),
    employee: new FormControl("", Validators.required),
    customer: new FormControl("", Validators.required),
    service: new FormControl("", Validators.required),
  })


  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAllFacility();
  }

  submitCreateContract() {
    const contract = this.createContractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      alert('Tạo thành công');
      this.createContractForm.reset();
    }, e => console.log(e));
  }

  private getAllFacility() {
    this.facilityService.getAll().subscribe(services => {
      this.services = services;
    });
  }
}
