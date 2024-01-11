import { Component, Input, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  discountPrice!: number;
  faCartPlus = faCartPlus;
  faStar = faStar;
  @Input() courseData!: Icourses;
  ngOnInit() {
    // console.log(this.courseData.discountPercentage.slice(0, 2));

    this.discountPrice =
      Number(this.courseData.actualPrice.slice(1)) -
      Number(this.courseData.actualPrice.slice(1)) *
        (Number(this.courseData.discountPercentage.slice(0, 2)) / 100);
  }
}
