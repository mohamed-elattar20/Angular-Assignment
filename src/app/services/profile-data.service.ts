import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  private profileData = new BehaviorSubject<UserData>({} as UserData);

  constructor() {}

  getProfileData() {
    return this.profileData.asObservable();
  }

  setProfileData(newProfileData: UserData) {
    this.profileData.next(newProfileData);
  }
}
