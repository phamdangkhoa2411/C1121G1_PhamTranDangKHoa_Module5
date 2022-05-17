import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/ProductService";
import {Category} from "../model/category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  categories: Category[] = [];
  products: Product[]=[];
  nameDelete: string;
   idDelete = 0;


  constructor(private productService: ProductService) {
  }

  getProduct() {
    this.productService.getProduct().subscribe(products => this.products = products)
  }

  ngOnInit(): void {
    this.getProduct();

  }


  deleteProductOb() {
    this.productService.deleteProduct(this.idDelete).subscribe(() => {
      window.location.reload();
      alert("xóa thành công");
    }, e => {
      console.log(e);
    });
  }
  sendInfor(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }
  }




