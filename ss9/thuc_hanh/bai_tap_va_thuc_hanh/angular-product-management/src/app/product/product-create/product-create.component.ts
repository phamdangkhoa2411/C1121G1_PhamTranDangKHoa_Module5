import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories : Category[]=[];
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required,Validators.min(100)]),
    description: new FormControl('',[Validators.required]),
    category : new FormControl('',[Validators.required]),
  })

  constructor(private productService: ProductService ,
              private router : Router) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(next => {
      this.categories = next;
    })
  }


  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      this.productForm.reset();
      this.router.navigate(['/product/list']);
      alert('thêm mới thành công')
    },e=>{
      console.log(e)
    });

  }
get name()
{
  return this.productForm.get('name')
}
get price(){
    return this.productForm.get('price')
}
get description(){
    return this.productForm.get('description')
}
get category(){
    return this.productForm.get('category')
}
}
