import { Component, Input } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  discountPrice!: number;
  @Input() cartItem!: Icourses;

  ngOnInit() {
    // console.log(this.courseData.discountPercentage.slice(0, 2));

    this.discountPrice =
      Number(this.cartItem.actualPrice.slice(1)) -
      Number(this.cartItem.actualPrice.slice(1)) *
        (Number(this.cartItem.discountPercentage.slice(0, 2)) / 100);
  }
}
