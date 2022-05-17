import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  idDelete = 0;
  nameDelete = "";

  constructor(private productService: ProductService,
              private router: Router) {
  }


  getAll() {
    this.productService.getAll().subscribe(next => {
      this.products = next;
      console.log(next)
    });
  }

  ngOnInit(): void {
    this.getAll()
  }


  sendInfor(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;

  }


  deleteProductOb() {
    this.productService.deleteProduct(this.idDelete).subscribe(() => {
      window.location.reload();
      alert("xóa thành công");
    }, e => {
      console.log(e);
    });
  }
}
