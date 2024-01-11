import { Component, Input } from '@angular/core';
import { Icourses } from 'src/app/interfaces/icourses';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent {
  @Input() courseData!: Icourses;
}
