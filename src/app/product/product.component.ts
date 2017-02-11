import { Component, OnInit, Output } from '@angular/core';
import { Product } from "./product.model";

@Component({
  selector: 'rp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() selectedProduct: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
