import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { CartService } from 'src/app/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPriceArr!: {
    actualPrice: number;
    discount: number;
    priceAfterDiscount: number;
  }[];
  cartItems!: Icourses[];
  totalPrice: number = 0;
  totalSaving: number = 0;
  totalActualPrice: number = 0;
  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((data) => (this.cartItems = data));

    this.totalPriceArr = this.cartItems.map((cartItem: any) => {
      return {
        actualPrice: Number(cartItem.actualPrice.slice(1)),
        discount: Number(cartItem.discountPercentage.slice(0, 2)) / 100,
        priceAfterDiscount:
          Number(cartItem.actualPrice.slice(1)) -
          Number(cartItem.actualPrice.slice(1)) *
            (Number(cartItem.discountPercentage.slice(0, 2)) / 100),
      };
    });

    this.totalPriceArr.forEach((course: any) => {
      this.totalPrice += course.priceAfterDiscount;
      this.totalActualPrice += course.actualPrice;
    });
    this.totalSaving = this.totalActualPrice - this.totalPrice;

    // console.log(this.totalPrice);
    // console.log(this.totalPriceArr);
  }

  clearCart() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then((result) => {
      if (result === 'Yes') {
        this.toast.success('Your Order Has been submitted Successfully', {
          duration: 3000,
        });
        this.cartService.setCartItems([]);
        this.router.navigate(['/']);
      } else {
        // console.log(`Cancelled`);
      }
    });
  }
}
