import { Component, Input } from '@angular/core';
import { CartItem } from '../cart';

@Component({
  selector: 'pm-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input({ required: true }) cartItem!: CartItem;
}
