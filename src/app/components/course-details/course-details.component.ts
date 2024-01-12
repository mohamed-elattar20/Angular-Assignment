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
  courseId!: number;
  courseObj: Icourses | undefined = {} as Icourses;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}
  ngOnInit(): void {
    this.courseId = this.activatedRoute?.snapshot?.params?.['id'];
    // console.log(this.courseId);
    console.log(this.courseObj);

    this.coursesService.getCourses().subscribe((data) => {
      // console.log(data);
      this.courseObj = data.find((course: any) => course.id === this.courseId);
    });
    console.log(this.courseObj);
  }
}
