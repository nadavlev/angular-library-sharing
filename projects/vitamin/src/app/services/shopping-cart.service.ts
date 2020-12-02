import { Injectable } from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from '../Models/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private products: Product[] = [];
  public productsInCart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getRandomProduct();
    this.productsInCart.next(this.products);
  }

  addProductToCart(id: string): void {
    this.productsService.getProduct(id).subscribe(product => {
      this.products.push(product);
      this.productsInCart.next(this.products);
    });
  }

  removeProductFromCart(id: string): void {
    // Do remove then
    this.productsInCart.next(this.products);
  }

  //
  getSuggestions(): Product[] {
    return this.productsService.getProductSuggestions();
  }

}
