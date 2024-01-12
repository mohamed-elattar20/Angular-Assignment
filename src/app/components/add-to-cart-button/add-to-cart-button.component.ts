import { Component, Input, OnInit, inject } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private toast: HotToastService
  ) {}
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
    if (courseItemData) {
      const foundedCourse: any = this.cartItems.find(
        (course: Icourses) => course.courseName === courseItemData.courseName
      );
      if (foundedCourse) {
        // foundedCourse.quantity += 1;
        this.toast.warning(
          `${foundedCourse.courseName} Already exists in the cart`,
          {
            duration: 2000,
          }
        );
        // console.log(this.cartItems);
      } else {
        this.cartItems.push({ ...courseItemData });
        console.log(this.cartItems);

        this.cartService.setCartItems(this.cartItems);
        this.toast.success('Course successfully added in the cart', {
          duration: 2000,
        });
      }
      this.cartService.setCartItems(this.cartItems);
    }
  }
}
