import { Injectable } from '@angular/core';
import {Service} from "../service/service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../customer/customer";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:3000/service');
  }
  saveService(service): Observable<Service> {
    return this.http.post<Service>('http://localhost:3000/service', service);
  }

  findById(id: number): Observable<Service> {
    return this.http.get<Service>(`http://localhost:3000/service/${id}`);
  }

  updateService(id: number, service: Service): Observable<Service> {
    return this.http.put<Service>(`http://localhost:3000/service/${id}`, service);
  }

  deleteService(a: Service): Observable<Service> {
    return this.http.delete<Service>(`http://localhost:3000/customer/${a.serviceId}`);
  }
}
