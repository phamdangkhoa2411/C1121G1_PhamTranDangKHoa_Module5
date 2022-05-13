import { Component } from '@angular/core';
import {Product} from "./model/Product";
import {ProductService} from "./services/ProductService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  products : Product[];
  productService : ProductService;

  constructor() {
    this.productService=new ProductService();
  }
public getProducts(){
    this.products = this.productService.getProduct()
}

}

