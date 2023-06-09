import { Component, Input } from '@angular/core';
import {
  NgbCarouselModule,
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.scss'],
})
export class PoemCardComponent {
  POEM_PAGE_LENGTH_MAX = 480;
  showNavigationArrows = false;
  poemPages: string[] = [];

  @Input() imageUrl = '';

  @Input() poemText = '';

  @Input() poemTitle = '';
  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
    config.interval = 0;
    config.wrap=false;
  }
  ngOnChanges() {
    this.pageifyText();
  }
  pageifyText() {
    if (!this.poemText) {
      return;
    }
    if (this.poemText.length <= this.POEM_PAGE_LENGTH_MAX) {
      this.poemPages.push(this.poemText);
    } else {
      this.showNavigationArrows=true;
      while (this.poemText.length > this.POEM_PAGE_LENGTH_MAX) {
        let i = this.POEM_PAGE_LENGTH_MAX;
        for (i; i < this.poemText.length; i++) {
          if (this.poemText.charAt(i) == ' ') break;
        }

        this.poemPages.push(this.poemText.substring(0, i));
        this.poemText = this.poemText.substring(i);
      }
      console.log('POEMPAGES', this.poemPages);
      console.log(this.poemText);
    }
  }
}
