import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Just enough here for the code to compile
  private productUrl = 'api/products';

  private http = inject(HttpClient);
  // constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productUrl)
      .pipe(tap((data) => console.table(data)));
  }
}
