import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  constructor() { }

  calculatePrice(weight: number): number {
    if (weight > 0 && weight <= 0.1) {
      return weight * 5;
    } else if (weight > 0.1 && weight <= 0.3) {
      return weight * 5 + 1;
    } else if (weight > 0.3 && weight <= 5) {
      return weight * 10;
    } else if (weight > 5 && weight <= 10) {
      return weight * 5 + weight + 75;
    } else if (weight > 10) {
      return (weight - 10) * 7.5 + 130 + weight;
    } else {
      return 0;
    }
  }
}
