import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/ProductService";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[]=[];

  constructor(private productService: ProductService) {
  }

  getProduct() {
    this.productService.getProduct().subscribe(products => this.products = products)
  }

  ngOnInit(): void {
    this.getProduct();

  }


}
