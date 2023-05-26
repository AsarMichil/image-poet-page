import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pg-one-one-two',
  templateUrl: './pg-one-one-two.component.html',
  styleUrls: ['./pg-one-one-two.component.scss']
})
export class PgOneOneTwoComponent {
  @Input() imageOneUrl='';
  @Input() imageTwoUrl='';
  @Input() imageThreeUrl='';
  @Input() imageFourUrl='';
}
