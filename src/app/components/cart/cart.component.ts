import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems!: Icourses[];
  discountPrice!: number;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((data) => (this.cartItems = data));
  }
}
