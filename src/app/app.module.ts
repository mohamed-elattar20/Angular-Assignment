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
    AddToCartButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
