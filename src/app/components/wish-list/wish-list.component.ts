import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icourses } from 'src/app/interfaces/icourses';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  coursesMap!: Map<string, Icourses>;
  constructor(
    private wishListService: WishListService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.wishListService
      .getCoursesArray()
      .subscribe((data) => (this.coursesMap = data));
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
