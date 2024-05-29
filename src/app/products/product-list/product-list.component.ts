import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule, ProductDetailComponent],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // Just enough here for the template to compile
  pageTitle = 'Products';
  errorMessage = '';

  // Products
  products: Product[] = [];

  private productService = inject(ProductService);
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.productService
      .getProducts()
      .pipe(tap(() => console.log('In component pipeline')))
      .subscribe((products) => (this.products = products));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
