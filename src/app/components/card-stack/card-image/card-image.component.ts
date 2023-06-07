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
  rotate=1;
  constructor(){
  }
  rotateCard(){
    this.rotate =this.rotateConstant * this.rotateNum;
    const styles = {'transform' : 'rotate('+ this.rotate + 'deg)'};

    return styles;
  }
}
