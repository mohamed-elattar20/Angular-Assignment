import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartLength!: number;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((data: any) => (this.cartLength = Object.keys(data).length));
  }
}
