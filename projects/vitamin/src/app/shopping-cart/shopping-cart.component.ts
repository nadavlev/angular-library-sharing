import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Product} from '../Models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  private shoppingCartProducts$: Subscription | undefined;
  public products: Product[] = [];
  public suggestions: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.shoppingCartProducts$ = this.shoppingCartService.productsInCart.subscribe(products => {
      this.products = products;
      this.getSuggestions();
    });
  }

  // will receive product ids from products in the cart and return list of suggestions
  getSuggestions(): void {
    this.suggestions = this.shoppingCartService.getSuggestions();
  }

}
