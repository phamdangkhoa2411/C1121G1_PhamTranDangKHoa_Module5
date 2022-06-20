import { Injectable } from '@angular/core';
import {Contract} from "../contract/contract";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../customer/customer";

@Injectable({
  providedIn: 'root'
})
export class ContractService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>('http://localhost:3000/contract');
  }
  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>('http://localhost:3000/contract', contract);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`http://localhost:3000/contract/${id}`);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`http://localhost:3000/contract/${id}`, contract);
  }

  deleteContract(a: Contract): Observable<Contract> {
    return this.http.delete<Contract>(`http://localhost:3000/contract/${a.contractId}`);
  }
}
