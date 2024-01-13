import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icourses } from 'src/app/interfaces/icourses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  discountPrice!: number;
  courseId!: number;
  courseObj: Icourses = {} as Icourses;
  datesArr!: [];
  hoursRemaining: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    this.courseId = this.activatedRoute?.snapshot?.params?.['id'];
  }
  ngOnInit(): void {
    this.calculateHoursRemaining();
    // console.log(this.courseId);
    // console.log(this.courseObj);

    this.coursesService.getCourses().subscribe((data) => {
      // console.log(data);
      this.courseObj = data.find((course: any) => course.id === this.courseId);

      this.datesArr = data.map((course: Icourses) => {
        if (course.discountPercentage.slice(0, 2) !== '0') {
          return {
            dateRemainForSale: new Date('1/15/2024').getTimezoneOffset(),
          };
        } else {
          return { dateRemainForSale: null };
        }
      });

      // console.log(this.datesArr);
    });

    // console.log(this.courseObj);
    this.discountPrice =
      Number(this.courseObj.actualPrice.slice(1)) -
      Number(this.courseObj.actualPrice.slice(1)) *
        (Number(this.courseObj.discountPercentage.slice(0, 2)) / 100);
  }

  calculateHoursRemaining() {
    const now = new Date();

    const newData = new Date();
    newData.setDate(newData.getDate() + 4);
    newData.setHours(0, 0, 0, 0);

    const differenceInMilliseconds = newData.getTime() - now.getTime();

    this.hoursRemaining = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60)
    );
  }
}
