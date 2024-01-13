import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Icourses } from 'src/app/interfaces/icourses';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-add-to-wish-list-button',
  templateUrl: './add-to-wish-list-button.component.html',
  styleUrls: ['./add-to-wish-list-button.component.css'],
})
export class AddToWishListButtonComponent implements OnInit {
  constructor(private wishListService: WishListService) {}

  faStar = faStar;

  @Input() courseData!: Icourses;
  coursesMap!: Map<string, Icourses>;
  favorite!: boolean;

  ngOnInit(): void {
    this.wishListService
      .getCoursesArray()
      .subscribe((data) => (this.coursesMap = data));
    // console.log(this.coursesMap);

    this.favorite = this.coursesMap.has(this.courseData.id);
  }

  toggleWishList() {
    if (this.coursesMap.has(this.courseData.id)) {
      this.coursesMap.delete(this.courseData.id);
      this.favorite = false;
    } else {
      this.coursesMap.set(this.courseData.id, this.courseData);
      this.favorite = true;
    }
    this.wishListService.setCoursesArray(this.coursesMap);
    // console.log(this.coursesMap);
    // console.log(this.favorite);
  }
}
