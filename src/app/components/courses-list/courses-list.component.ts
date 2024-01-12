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
  // searchedCourses: Icourses[] = [];
  constructor(private coursesService: CoursesService) {
    this.sortInput = 'asc';
  }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data: Icourses[]) => {
      console.log(data);
      this.courses = data;
    });
  }

  handleSearch() {
    if (this.searchInput) {
      this.courses = this.courses.filter(
        (course) =>
          course.courseName.includes(this.searchInput) ||
          course.author.includes(this.searchInput) ||
          course.tags.includes(this.searchInput)
      );
    }
  }

  handleSort() {
    if (this.sortInput === 'desc') {
      this.courses.sort(
        (a, b) =>
          Number(a.actualPrice.slice(1)) - Number(b.actualPrice.slice(1))
      );
    }
    if (this.sortInput === 'asc') {
      this.courses.sort(
        (a, b) =>
          Number(b.actualPrice.slice(1)) - Number(a.actualPrice.slice(1))
      );
    }
  }
}
