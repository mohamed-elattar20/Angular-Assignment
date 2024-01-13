import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UserData } from 'src/app/interfaces/user-data';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('fileRef') hiddenInputRef!: ElementRef;

  profileForm: FormGroup;
  displayName: string = '';
  isProfessional: boolean = false;
  isProfessionalInput: string = '';
  selectedImage: any = null;

  constructor(
    private profileDataService: ProfileDataService,
    private toast: HotToastService
  ) {
    this.profileForm = new FormGroup({
      displayName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      about: new FormControl('', [Validators.maxLength(100)]),
      interest: new FormControl(''),
      role: new FormControl(''),
      roleText: new FormControl('', [Validators.maxLength(200)]),
      experience: new FormControl(''),
      expertise: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.profileDataService.getProfileData().subscribe((data: UserData) => {
      console.log(data);
      this.displayName = data.displayName;
      this.profileForm.patchValue(data);
    });
  }

  //
  selectedInterest!: number;

  interests = [
    { id: 'football', name: 'football' },
    { id: 'reading', name: 'reading' },
    { id: 'swimming', name: 'swimming' },
    { id: 'drawing', name: 'drawing' },
  ];
  //

  openInputFile() {
    this.hiddenInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.selectedImage = e.target?.result; // Assign image data to property
    };

    reader.readAsDataURL(file);

    console.log(this.selectedImage);
    // Read file as a data URL
  }

  setIsProfessional() {
    if (this.isProfessionalInput === 'professional') {
      this.isProfessional = !this.isProfessional;
    }
    if (this.isProfessionalInput === 'student') {
      this.isProfessional = false;
      this.profileForm.get('experience')?.reset();
      this.profileForm.get('expertise')?.reset();
    }
  }

  handleSubmit() {
    console.log(this.profileForm);
    this.profileDataService.setProfileData({
      displayName: this.profileForm.controls['displayName'].value,
      firstName: this.profileForm.controls['firstName'].value,
      lastName: this.profileForm.controls['lastName'].value,
      about: this.profileForm.controls['about'].value,
      interest: this.profileForm.controls['interest'].value,
      role: this.profileForm.controls['role'].value,
      roleText: this.profileForm.controls['roleText'].value,
      experience: this.profileForm.controls['experience'].value,
      expertise: this.profileForm.controls['expertise'].value,
    });
    this.toast.success('Your profile is updated.', {
      duration: 3000,
    });
    this.isProfessional = false;
    this.profileForm.reset();
  }

  log() {
    // console.log(this.selectedInterest);
  }
}
