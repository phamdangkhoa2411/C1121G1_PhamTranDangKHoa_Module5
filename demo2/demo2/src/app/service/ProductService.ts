import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Category} from "../model/category";


export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
const API_URL = `${environment.apiUrl}`;



@Injectable({
  providedIn: 'root'
})
export class  ProductService {
  constructor(private http : HttpClient) {
  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL+'/product');
  }
  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL +'/product',product);
  }
  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(API_URL+'/categories');
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/product/${id}`, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }
  // Search By Name
  findByKey(name: string,price : string,date : string):Observable<any> {
    return this.http.get<any>(`${API_URL}/product?name_like=${name}&price_like=${price}&date_like=${date}`);
  }
}

