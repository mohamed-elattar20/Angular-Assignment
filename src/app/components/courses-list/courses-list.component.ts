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
  searchedCourses: Icourses[] = [];
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data: Icourses[]) => {
      // console.log(typeof data);
      console.log(data);

      this.courses = data;
    });
  }

  handleSearch() {
    this.courses = this.courses.filter(
      (course) =>
        course.courseName.includes(this.searchInput) ||
        course.author.includes(this.searchInput) ||
        course.tags.includes(this.searchInput)
    );
  }
}
