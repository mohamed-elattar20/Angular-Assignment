import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icourses } from '../interfaces/icourses';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cartArray = new BehaviorSubject<Array<Icourses>>([]);

  getCartItems() {
    return this.cartArray.asObservable();
  }

  setCartItems(newCartArr: Icourses[]) {
    this.cartArray.next(newCartArr);
  }
}
