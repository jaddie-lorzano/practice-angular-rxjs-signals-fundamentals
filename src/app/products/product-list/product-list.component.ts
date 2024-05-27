import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'pm-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule, ProductDetailComponent],
})
export class ProductListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Products';
  errorMessage = '';

  // Products
  products: Product[] = [];

  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
