import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsAPI = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {   }

  getProducts(){
   return this.http.get<Products[]>(this.productsAPI);
  }
  
}
