import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-cart-total',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-total.component.html',
})
export class CartTotalComponent {
  cartItems = [];

  subTotal = 100;
  deliveryFee = 20;
  tax = 10;
  totalPrice = this.subTotal + this.deliveryFee + this.tax;
}
