import { Injectable } from '@angular/core';
import {Contract} from '../models/contract';
import {Customer} from '../models/customer';
import {CustomerService} from './customer.service';
import {HomeServiceService} from './home-service.service';
import {Home} from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class ContractService {


  constructor(private  customerService : CustomerService,
              private homeServiceService : HomeServiceService) { }


  customerList: Customer[] = this.customerService.getAllCustomer();
  contractList: Contract[] = [
    {
      maHopDong : 'P0001',
      Customer   :  this.customerList[1],
      ngayLamHopDong: '2022-21-2',
      ngayKetThucHopDong: '2022-21-3',
      tienDatCoc:  12

    },
    {
      maHopDong : 'P0002',
      Customer   :  this.customerList[2],
      ngayLamHopDong: '2022-21-2',
      ngayKetThucHopDong: '2022-21-3',
      tienDatCoc:  345

    },
    {
      maHopDong : 'P0003',
      Customer   :  this.customerList[3],
      ngayLamHopDong: '2022-21-2',
      ngayKetThucHopDong: '2022-21-3',
      tienDatCoc:  12

    },
    {
      maHopDong : 'P0004',
      Customer   :  this.customerList[5],
      ngayLamHopDong: '2022-21-2',
      ngayKetThucHopDong: '2022-21-3',
      tienDatCoc:  12

    },
  ]


  getAllContract(){
    return this.contractList;
  }
}
