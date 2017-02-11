import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'rp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();

  constructor() {
    this.products.push(
      new Product('Product_1', 2000, 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400'),
      new Product('Product_2', 100, 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400'),
      new Product('Product_3', 850, 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400'),
      new Product('Product_4', 3600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EpHGsakV93W3jtEcfR_MiXXNFjsFfHMgBZiiz5C8gggGLcc5'),
      new Product('Product_5', 260, 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400'),
    )
  }

  onSelected(product: Product) {
    this.productSelected.emit(product);
  }

  ngOnInit() {
  }

}
