import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icourses } from '../interfaces/icourses';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private coursesArray = new BehaviorSubject<Map<string, Icourses>>(new Map());
  // private coursesArray = new BehaviorSubject<any>(new Map());

  constructor() {}

  getCoursesArray() {
    return this.coursesArray.asObservable();
  }

  setCoursesArray(coursesArray: Map<string, Icourses>) {
    this.coursesArray.next(coursesArray);
  }
}
