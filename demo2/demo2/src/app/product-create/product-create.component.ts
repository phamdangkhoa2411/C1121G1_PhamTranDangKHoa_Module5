import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/ProductService";
import {Category} from "../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories : Category[]=[];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    status : new FormControl(),
    category : new FormControl(),
  });

  constructor(private productService: ProductService,
              private router :Router) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(next => {
      this.categories = next;
    })
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['/list']);
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }


}
