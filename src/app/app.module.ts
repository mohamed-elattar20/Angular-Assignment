import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { BannerComponent } from './components/banner/banner.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

// Toaster
import { HotToastModule } from '@ngneat/hot-toast';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    WishListComponent,
    CartComponent,
    DashboardComponent,
    NotFoundComponent,
    CoursesListComponent,
    BannerComponent,
    CourseItemComponent,
    AddToCartButtonComponent,
    CartItemComponent,
    CourseDetailsComponent,
    AddToWishListButtonComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HotToastModule.forRoot(),
    NgbModule,
  ],
  providers: [provideHotToastConfig()],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { provideHotToastConfig } from '@ngneat/hot-toast';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AddToWishListButtonComponent } from './components/add-to-wish-list-button/add-to-wish-list-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
