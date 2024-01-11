import { Injectable } from '@angular/core';
import * as courses from '../../assets/data/data.json';
import { BehaviorSubject } from 'rxjs';
import { Icourses } from '../interfaces/icourses';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: any = new BehaviorSubject<any>(Array.from(courses));

  getCourses() {
    return this.courses.asObservable();
  }

  constructor() {}
}
