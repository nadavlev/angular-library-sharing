import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../services/products.service';
import {Product} from '../Models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private id = '';
  public product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    this.productsService.getProduct(this.id)
      .subscribe(product => {
      if (!product) {
        console.error('Product not found');
        return;
      }
      else {
        this.product = product;
      }
    });
  }

  addToCart(): void{
    console.log(`Adding product id ${this.product?.id} to cart`);
  }

}
