import {Category} from "./category";

export interface Product {
  id ?: number ;
  name ?: string ;
  price ?: string ;
  status ?: string ;
  date?: string ;
  category ?: Category ;
}
