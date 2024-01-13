import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  constructor(
    private cartService: CartService,
    private toast: HotToastService,
    private wishListService: WishListService
  ) {}
  coursesMap!: Map<string, Icourses>;
  favorite!: boolean;

  @Output() cartItemId = new EventEmitter();
  cartArr!: Icourses[];
  discountPrice!: number;
  @Input() cartItem!: Icourses;

  ngOnInit() {
    this.wishListService
      .getCoursesArray()
      .subscribe((data) => (this.coursesMap = data));
    this.favorite = this.coursesMap.has(this.cartItem.id);
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
    this.toast.success(`Course Successfully removed from cart`, {
      duration: 3000,
    });
  }

  removeToWishList() {
    if (this.coursesMap.has(this.cartItem.id)) {
      this.toast.warning(
        `${this.cartItem.courseName} Already exists in the Wish List`,
        {
          duration: 3000,
        }
      );
      this.deleteCourse(this.cartItem.id);
    } else {
      this.coursesMap.set(this.cartItem.id, this.cartItem);
      this.favorite = true;
      this.toast.success('Course successfully added to wish List', {
        duration: 3000,
      });
      this.deleteCourse(this.cartItem.id);
    }
    console.log(this.coursesMap);
    console.log(this.favorite);
  }
}
