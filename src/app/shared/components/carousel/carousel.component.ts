import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit{
  @Input('slides') games: Game[] = [];

  currentSlide = 0;

  constructor() {}

  // method for change slide every 5 seconds
  ngOnInit(): void {
    setInterval(() => {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.games.length ? 0 : next;
    }, 5000);
  }
}
