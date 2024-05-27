import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'welcome', component: HomeComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      ),
  },
];
