import { Injectable } from '@angular/core';
import {Home} from '../models/home';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

  const URL_HOME = "http://localhost:8080/home";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) { }

  getAllHotel() : Observable<Home[]>{
      return this.http.get<Home[]>(URL_HOME);
  }

}
