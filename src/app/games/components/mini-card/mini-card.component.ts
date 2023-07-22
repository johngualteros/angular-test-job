import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {
  @Input() game: Game;
  constructor() { }
}
