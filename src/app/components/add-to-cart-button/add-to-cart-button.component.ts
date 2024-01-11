import { Component, Input, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent implements OnInit {
  constructor(private cartService: CartService) {}
  faCartPlus = faCartPlus;
  cartItemsServiceArr = [];
  cartItems: any = [];

  @Input() courseItem!: Icourses;

  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((data: any) => (this.cartItems = data));
  }

  addToCart(courseItemData: Icourses) {
    // console.log(courseItemData);
    const foundedCourse: any = this.cartItems.find(
      (course: Icourses) => course.courseName === courseItemData.courseName
    );
    if (foundedCourse) {
      foundedCourse.quantity += 1;
      console.log(this.cartItems);
    } else {
      this.cartItems.push({ ...courseItemData, quantity: 1 });
      console.log(this.cartItems);

      this.cartService.setCartItems(this.cartItems);
    }
    this.cartService.setCartItems(this.cartItems);
  }
}
