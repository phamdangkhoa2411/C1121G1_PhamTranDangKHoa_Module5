import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../models/service';
import {Observable} from 'rxjs';
import {RentType} from '../models/RentType';
import {ServiceType} from '../models/ServiceType';
import {Employee} from '../models/employee';


const URL_SERVICE="http://localhost:8080/api/service/";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private  http : HttpClient) { }

  // getAllService(): Observable<Service[]>{
  //   return this.http.get<Service[]>(URL_SERVICE + 'list');
  //
  // }
  getAllRentType(): Observable<RentType[]>{
    return this.http.get<RentType[]>(URL_SERVICE + 'rentType');

  }

  getAllServiceType(): Observable<ServiceType[]>{
    return this.http.get<ServiceType[]>(URL_SERVICE + 'serviceType');
  }


  searchAllService(name : string ,rentType: string ,serviceType: string): Observable<Service[]>{
    return this.http.get<Service[]>(URL_SERVICE + "search?name=" + name + "&rentType=" + rentType + "&serviceType="+ serviceType )
  }


  saveService(service: Service) : Observable<Service>{
    return this.http.post<Service>(URL_SERVICE + 'add', service);
  }

  findById(id: number): Observable<Service>{
    return this.http.get<Service>(URL_SERVICE  + "detail/" + id);
  }

  updateService(id: number , service: Service): Observable<Service>{
    return this.http.put<Service>(URL_SERVICE + "update/" + id , service);
  }

  deleteService(service : Service): Observable<Service>{
    return this.http.patch<Service>(URL_SERVICE + "delete?=id"+service.id , service)
  }
}
