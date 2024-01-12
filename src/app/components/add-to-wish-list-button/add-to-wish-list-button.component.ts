import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-to-wish-list-button',
  templateUrl: './add-to-wish-list-button.component.html',
  styleUrls: ['./add-to-wish-list-button.component.css'],
})
export class AddToWishListButtonComponent {
  faStar = faStar;
}
