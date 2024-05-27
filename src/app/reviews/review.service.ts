import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  // Just enough here for the code to compile
  private reviewUrl = 'api/reviews';

  getReviewUrl(productId: number): string {
    // Use appropriate regular expression syntax to
    // get an exact match on the id
    return `${this.reviewUrl}?productId=^${productId}$`;
  }
}
