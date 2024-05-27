import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'pm-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  // Just enough here for the template to compile
  @Input() productId: number = 0;
  errorMessage = '';

  // Product to display
  product: Product | null = null;

  // Set the page title
  pageTitle = this.product
    ? `Product Detail for: ${this.product.productName}`
    : 'Product Detail';

  addToCart(product: Product) {}
}
