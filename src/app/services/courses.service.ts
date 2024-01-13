import { Injectable } from '@angular/core';
import * as courses from '../../assets/data/data.json';
import { BehaviorSubject } from 'rxjs';
import { Icourses } from '../interfaces/icourses';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  private courses = new BehaviorSubject<any>(
    Array.from(courses).map((course) => ({
      ...course,
      id: crypto.randomUUID(),
    }))
  );

  getCourses() {
    return this.courses.asObservable();
  }
}
