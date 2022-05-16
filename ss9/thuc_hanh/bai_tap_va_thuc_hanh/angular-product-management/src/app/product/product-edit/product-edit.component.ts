import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  categories : Category[]=[];


  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private router : Router
  ) {
    this.activetedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);

    });
  }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(next => {
      this.categories = next;
    })
  }
  comparefn(t1 : Category , t2 : Category) : boolean{
    return t1 && t2 ? t1.id===t2.id:t1===t2 ;
  }
  getProduct(id: number) {
    return this.productService.findById(id).subscribe(next => {
      this.productForm = new FormGroup({
        name : new FormControl(next.name ),
        price : new FormControl(next.price ),
        description : new FormControl(next.description),
        category : new FormControl(next.category),

      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      this.router.navigate(['/product/list']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });

  }
}
