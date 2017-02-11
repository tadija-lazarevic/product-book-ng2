import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'rp-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
