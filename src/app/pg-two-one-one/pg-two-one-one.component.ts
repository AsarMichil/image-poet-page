import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pg-two-one-one',
  templateUrl: './pg-two-one-one.component.html',
  styleUrls: ['./pg-two-one-one.component.scss']
})
export class PgTwoOneOneComponent {
  @Input() imageOneUrl='';
  @Input() imageTwoUrl='';
  @Input() imageThreeUrl='';
  @Input() imageFourUrl='';

}
