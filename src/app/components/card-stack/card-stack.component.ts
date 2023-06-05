import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent {
  @Input() image1Url='';
  @Input() image2Url='';
  @Input() image3Url='';
}
