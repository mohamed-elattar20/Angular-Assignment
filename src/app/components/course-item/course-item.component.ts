import { Component, Input, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  discountPrice!: number;

  @Input() courseData!: Icourses;
  ngOnInit() {
    // console.log(this.courseData.discountPercentage.slice(0, 2));

    this.discountPrice =
      Number(this.courseData.actualPrice.slice(1)) -
      Number(this.courseData.actualPrice.slice(1)) *
        (Number(this.courseData.discountPercentage.slice(0, 2)) / 100);
  }
}
