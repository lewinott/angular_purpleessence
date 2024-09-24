import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getProducts() {
    return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => data.products);
  }
}
