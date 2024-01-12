import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWishListButtonComponent } from './add-to-wish-list-button.component';

describe('AddToWishListButtonComponent', () => {
  let component: AddToWishListButtonComponent;
  let fixture: ComponentFixture<AddToWishListButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToWishListButtonComponent]
    });
    fixture = TestBed.createComponent(AddToWishListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
