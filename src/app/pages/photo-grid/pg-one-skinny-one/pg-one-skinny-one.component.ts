import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pg-one-skinny-one',
  templateUrl: './pg-one-skinny-one.component.html',
  styleUrls: ['./pg-one-skinny-one.component.scss']
})
export class PgOneSkinnyOneComponent {
  @Input() imageOneUrl='';
  @Input() imageTwoUrl='';
  @Input() imageThreeUrl='';
}
