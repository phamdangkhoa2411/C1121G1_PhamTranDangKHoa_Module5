import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {position} from '../models/position';
import {Education} from '../models/Education';
import {Division} from '../models/Division';


const API_URL = "http://localhost:8080/api/employee/";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {




  constructor(private http : HttpClient) { }

  getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>(API_URL + 'list');
  }




  getAllPosition(): Observable<position[]>{
    return this.http.get<position[]>(API_URL + 'position');
  }


  getAllEducation(): Observable<Education[]> {
    return  this.http.get<Education[]>(API_URL + 'education')
  }

  getAllDivision(): Observable<Division[]> {
    return  this.http.get<Division[]>(API_URL + 'division')
  }


  saveEmployee(employee: Employee) : Observable<Employee>{
      return this.http.post<Employee>(API_URL + 'add', employee);
  }

  findById(id : number)  : Observable<Employee>{
    return this.http.get<Employee>(API_URL + "detail/" + id);
  }


  updateEmployee( id: number, employee:Employee): Observable<Employee>{
    return this.http.put<Employee>(API_URL + 'update/' +id , employee);
  }

deleteEmployee( employee : Employee): Observable<any>{
    return this.http.put<any>(API_URL + 'delete?id='+employee.id , employee)
}


  searchEmployee(name: any ,address: any ,position: any ,education: any, division: any, index: any)  : Observable<Employee[]>{
      return this.http.get<Employee[]>(API_URL + "search?name="+name + "&address=" + address +
                 "&position=" + position + "&education=" + education + "&division=" + division +  "&last_item="+index)
  }

}
