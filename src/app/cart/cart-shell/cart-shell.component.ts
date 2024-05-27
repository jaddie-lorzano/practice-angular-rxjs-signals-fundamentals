import { Component } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@Component({
  selector: 'pm-cart-shell',
  standalone: true,
  templateUrl: './cart-shell.component.html',
  imports: [CartListComponent, CartTotalComponent],
})
export class CartShellComponent {}
