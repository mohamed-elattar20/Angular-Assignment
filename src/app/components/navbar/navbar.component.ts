import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faCartPlus = faCartPlus;
  cartLength!: number;
  WishList!: Map<number, Icourses>;

  constructor(
    private cartService: CartService,
    private wishListService: WishListService
  ) {}
  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((data: any) => (this.cartLength = Object.keys(data).length));

    this.wishListService
      .getCoursesArray()
      .subscribe((data) => (this.WishList = data));
  }
}
