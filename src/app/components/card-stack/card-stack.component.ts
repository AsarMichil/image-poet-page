import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss'],
})
export class CardStackComponent {
  poems = [];
  @Input() image1Url = '';
  @Input() image2Url = '';
  @Input() image3Url = '';
  constructor(private data: DataService) {
    this.setPoems();
  }
  async setPoems() {
    this.poems = await this.data.getUsersPoems();
    console.log('poems ', this.poems);
  }
}
