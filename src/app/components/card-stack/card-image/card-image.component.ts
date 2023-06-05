import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent {
  @Input() imageUrl='';
  @Input() rotateNum: number;
  rotateConstant=9;
  constructor(){
  }
  rotateCard(){
    this.rotateNum *=this.rotateConstant;
    const styles = {'transform' : 'rotate('+ this.rotateNum + 'deg)'};

    return styles;
  }
}
