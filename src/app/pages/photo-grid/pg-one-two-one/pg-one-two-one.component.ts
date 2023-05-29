import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pg-one-two-one',
  templateUrl: './pg-one-two-one.component.html',
  styleUrls: ['./pg-one-two-one.component.scss']
})
export class PgOneTwoOneComponent {
  @Input() imageOneUrl='';
  @Input() imageTwoUrl='';
  @Input() imageThreeUrl='';
  @Input() imageFourUrl='';
}
