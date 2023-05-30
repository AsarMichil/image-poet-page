import { Component } from '@angular/core';

@Component({
  selector: 'app-account-temp',
  templateUrl: './account-temp.component.html',
  styleUrls: ['./account-temp.component.scss']
})
export class AccountTempComponent {
  image1 = 'assets/compressed/DSC08285.JPG';
  image2 = 'assets/compressed/DSC08348.JPG';
  image3 = 'assets/compressed/DSC07654.JPG';
  imagesAdded = false;
  displayStyle = 'none';
  toGo = 'block';
  addImages(){
    this.imagesAdded = true;
    this.displayStyle="block";
    this.toGo = 'none';
  }}
