import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    //当前route中找到paraneter name为id的value
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      //param类型转换为number
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      //next: For each item being emitted（product，类型Iproduct） by the observable perform this function
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
