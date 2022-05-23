import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaiViet} from "../model/bai-viet";


export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class BaiVietService {

  constructor(private http: HttpClient) {
  }
  getBaiviet(): Observable<BaiViet[]>{
    return this.http.get<BaiViet[]>("http://localhost:8080/baiViet");
  }
  // saveBaiviet(baiviet): Observable<BaiViet> {
  //   return this.http.post<BaiViet>(API_URL +'/baiViet',baiviet);
  // }
  //
  //
  // findByKey(dienTich: string, huong: string, gia: string):Observable<any> {
  //   return this.http.get<any>(`${API_URL}/baiViet?dienTich_like=${dienTich}&huong_like=${huong}&gia_like=${gia}`)
  //
  // }
}
