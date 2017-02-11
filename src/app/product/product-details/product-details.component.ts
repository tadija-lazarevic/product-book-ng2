import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'rp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() selectedProduct: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
