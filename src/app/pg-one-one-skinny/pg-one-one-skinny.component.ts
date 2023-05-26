import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pg-one-one-skinny',
  templateUrl: './pg-one-one-skinny.component.html',
  styleUrls: ['./pg-one-one-skinny.component.scss']
})
export class PgOneOneSkinnyComponent {
  @Input() imageOneUrl='';
  @Input() imageTwoUrl='';
  @Input() imageThreeUrl='';
}
