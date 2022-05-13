import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: number;


  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private router : Router
  ) {
    this.activetedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      console.log(product)
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name : new FormControl(product.name ),
        price : new FormControl(product.price ),
        description : new FormControl(product.description),
      });
    });
  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
    return this.productService.findById(id);
  }
  delete(id:number){
    this.productService.deleteProduct(id)
  this.router.navigate(['/product/list'])
  }

}
