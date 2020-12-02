import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../Models/product';

@Component({
  selector: 'app-product-list-display',
  templateUrl: './product-list-display.component.html',
  styleUrls: ['./product-list-display.component.scss']
})
export class ProductListDisplayComponent implements OnInit {

  @Input() products: Product[];
  @Input() actions: any[]; // not implemented - actions should be according to context

  constructor() { }

  ngOnInit(): void {
  }

}
