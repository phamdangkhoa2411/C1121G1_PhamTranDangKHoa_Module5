import {Component, OnInit} from '@angular/core';
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
    private router: Router
  ) {
    this.activetedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(next => {
      this.productForm = new FormGroup({
        id: new FormControl(next.id),
        name: new FormControl(next.name),
        price: new FormControl(next.price),
        description: new FormControl(next.description),
      });
    });
  }

  delete(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        this.router.navigate(['/product/list']);
        alert("xóa thành công")
      }, e => {
        console.log(e);
      });
  }

}
