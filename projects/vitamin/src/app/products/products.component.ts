import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../Models/product';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  private productsSubscription$: Subscription | undefined;
  public productFilter = '';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscription$ = this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription$) {
      this.productsSubscription$.unsubscribe();
    }
  }
  doFilter(): void {
    if (!this.productFilter) {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.products.filter(product => {
        return product.name.includes(this.productFilter);
      });
    }
  }
}
