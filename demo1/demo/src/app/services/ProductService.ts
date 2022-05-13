import {Product} from "../model/Product";

export class ProductService {

public getProduct(){
  let products : Product[]

  products= [
    new Product(1,"iphone11 ", 500),
    new Product(2,"iphone13 ", 1500),
    new Product(3,"iphone12 ", 800),
  ];
  return products ;

}


  }
