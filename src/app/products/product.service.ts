import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products';

  private http = inject(HttpClient);
  // constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productUrl)
      .pipe(tap((data) => console.table(data)));
  }

  getProduct(id: string): Observable<Product> {
    const productUrl = `${this.productUrl}/${id}`;
    return this.http
      .get<Product>(productUrl)
      .pipe(tap((data) => console.log(data)));
  }
}
