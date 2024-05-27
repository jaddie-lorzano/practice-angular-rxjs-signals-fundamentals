import { Component } from '@angular/core';
import { CartItem } from '../cart';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'pm-cart-list',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  pageTitle = 'Cart';

  cartItems: CartItem[] = [];
}
