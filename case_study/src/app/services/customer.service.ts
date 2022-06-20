import { Injectable } from '@angular/core';
import {Customer} from "../customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(page: number): Observable<any> {
    return this.http.get<any>(API_URL + `/customers/list?page=${page}`);
  }

  saveCustomer(customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(API_URL + `/customers/save`, customer);
  }

  findById(id: number, customer: Customer): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/edit/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${API_URL}/customers/update/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/delete/${id}`);
  }
}
