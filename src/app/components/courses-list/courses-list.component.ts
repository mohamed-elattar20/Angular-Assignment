import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: Icourses[] = [];
  searchInput: string = '';
  sortInput: string;
  finalCoursesArr: Icourses[] = [];
  constructor(private coursesService: CoursesService) {
    this.sortInput = 'asc';
  }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data: Icourses[]) => {
      this.courses = data;
      this.finalCoursesArr = this.courses;
      // console.log(this.courses);
    });
  }

  handleSearch() {
    if (this.searchInput) {
      this.finalCoursesArr = this.courses.filter(
        (course) =>
          course.courseName
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
          course.author
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
          course.tags.includes(this.searchInput.toLowerCase())
      );
    }
  }

  resetCoursesArr() {
    this.finalCoursesArr = this.courses;
    // console.log(this.finalCoursesArr);
  }

  handleSort() {
    if (this.sortInput === 'desc') {
      this.finalCoursesArr.sort(
        (a, b) =>
          Number(a.actualPrice.slice(1)) -
          Number(a.actualPrice.slice(1)) *
            (Number(a.discountPercentage.slice(0, 2)) / 100) -
          (Number(b.actualPrice.slice(1)) -
            Number(b.actualPrice.slice(1)) *
              (Number(b.discountPercentage.slice(0, 2)) / 100))
      );
    }
    if (this.sortInput === 'asc') {
      this.finalCoursesArr.sort(
        (a, b) =>
          Number(b.actualPrice.slice(1)) -
          Number(b.actualPrice.slice(1)) *
            (Number(b.discountPercentage.slice(0, 2)) / 100) -
          Number(a.actualPrice.slice(1)) -
          Number(a.actualPrice.slice(1)) *
            (Number(a.discountPercentage.slice(0, 2)) / 100)
      );
    }
  }
}
