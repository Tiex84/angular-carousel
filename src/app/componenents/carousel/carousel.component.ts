import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  public images = [
    { src: 'assets/img/1.jpg' },
    { src: 'assets/img/2.jpg' },
    { src: 'assets/img/3.jpg' },
  ];

  currentImage = 0;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor() { }

  onPreviousClick() {
    const previous = this.currentImage - 1;
    this.currentImage = previous < 0 ? this.images.length - 1 : previous;
    console.log(this.currentImage);
  }

  onNextClick() {
    const next = this.currentImage + 1;
    this.currentImage = next === this.images.length ? 0 : next;
    console.log(this.currentImage);
  }

  ngOnInit(): void {
  }


}
