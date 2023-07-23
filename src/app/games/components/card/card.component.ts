import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() game: Game = {
    id: 0,
    title: '',
    thumbnail: '',
    short_description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: ''
  };
}
