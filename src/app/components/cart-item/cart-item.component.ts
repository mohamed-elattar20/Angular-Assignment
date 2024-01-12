import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  constructor(private cartService: CartService) {}
  @Output() cartItemId = new EventEmitter();
  cartArr!: Icourses[];
  discountPrice!: number;
  @Input() cartItem!: Icourses;

  ngOnInit() {
    // console.log(this.courseData.discountPercentage.slice(0, 2));

    this.discountPrice =
      Number(this.cartItem.actualPrice.slice(1)) -
      Number(this.cartItem.actualPrice.slice(1)) *
        (Number(this.cartItem.discountPercentage.slice(0, 2)) / 100);

    this.cartService.getCartItems().subscribe((data) => (this.cartArr = data));
  }

  deleteCourse(courseId: string) {
    this.cartItemId.emit(courseId);
    console.log(courseId);
    this.cartArr = this.cartArr.filter((course: any) => course.id !== courseId);
    this.cartService.setCartItems(this.cartArr);
    console.log(this.cartArr);
  }
}
