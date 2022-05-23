import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/ProductService";
import {Category} from "../model/category";
import {migrateLegacyGlobalConfig} from "@angular/cli/utilities/config";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  nameDelete: string;
  idDelete = 0;
  a=1;


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

  search(name: string,price: string,date:string) {

    // @ts-ignore
    this.productService.findByKey(name,price,date).subscribe(next => {
      this.products = next;
      console.log(next)
    });
  }


  deleteOpion() {
    const checkList= document.querySelectorAll("input[type='checkbox']:checked");
    const valueList=[];
    let ak47 ;
    for (let i= 0 ; i < checkList.length;i++){
       ak47 = checkList[i];
      valueList.push(ak47.value);
    }
    for (let j=0 ; j <valueList.length; j++){
      ak47=+valueList[j];
      this.productService.deleteProduct(ak47).subscribe(

        ()=>{},error => {
          console.log(error);
        },
        ()=>{
          window.location.reload();
        }
      );
    }
  }
}




