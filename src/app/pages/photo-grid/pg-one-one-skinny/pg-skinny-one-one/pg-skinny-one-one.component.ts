import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pg-skinny-one-one',
  templateUrl: './pg-skinny-one-one.component.html',
  styleUrls: ['./pg-skinny-one-one.component.scss']
})
export class PgSkinnyOneOneComponent {
  @Input() imageOneUrl='';
  @Input() imageTwoUrl='';
  @Input() imageThreeUrl='';
}
