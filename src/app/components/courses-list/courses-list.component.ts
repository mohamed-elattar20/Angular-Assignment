import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses!: Icourses;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService
      .getCourses()
      .subscribe((data: Icourses) => (this.courses = data));
  }
}
