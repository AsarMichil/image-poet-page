import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.scss']
})
export class PoemCardComponent {
  @Input() imageUrl='';
  @Input() poemText='';
  @Input() poemTitle='';


}
