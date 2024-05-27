import { Component, Input } from '@angular/core';
import { CartItem } from '../cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pm-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input({ required: true }) cartItem!: CartItem;

  // Quantity available (hard-coded to 8)
  // Mapped to an array from 1 - 8
  quantityArray = [...Array(8).keys()].map((x) => x + 1);

  // Calculate the extended price
  extendedPrice = this.cartItem?.quantity * this.cartItem?.product.price;

  onQuantitySelected(quantity: number): void {}
  removeFromCart(): void {}
}
