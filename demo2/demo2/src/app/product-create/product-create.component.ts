import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(50)])),
    price: new FormControl('',Validators.compose([Validators.required,Validators.min(50)])),
    status : new FormControl('',Validators.compose([Validators.required])),
    date : new FormControl('',Validators.compose([Validators.required])),
    category : new FormControl('',Validators.compose([Validators.required])),
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
      this.router.navigate(['list']);
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

  get name(){
    return this.productForm.get('name')
  };
  get price(){
    return this.productForm.get('price')

  } ;
  get status(){
    return this.productForm.get('status')
  } ;
  get date(){
    return this.productForm.get('date')
  } ;
  get category(){
    return this.productForm.get('category')
  } ;

}
