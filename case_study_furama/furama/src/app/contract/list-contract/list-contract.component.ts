import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../services/contract.service';
import {Contract} from '../../models/contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
    contractList : Contract[] = [];
  constructor(private contractService : ContractService) { }

  ngOnInit(): void {
          this.contractList = this.contractService.getAllContract();
  }

}
