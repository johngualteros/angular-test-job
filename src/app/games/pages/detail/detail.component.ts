import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailGame } from 'src/app/core/interfaces/detail-game';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }
  id: number = 0;
  game: DetailGame = {
    id: 0,
    title: '',
    thumbnail: '',
    status: '',
    short_description: '',
    description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: '',
    minimum_system_requirements: {
      os: '',
      processor: '',
      memory: '',
      graphics: '',
      storage: ''
    },
    screenshots: [{
      id: 0,
      image: ''
    }]

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getSingleGame();
  }
  getSingleGame() {
    this.gamesService.getGame(this.id).subscribe((game) => {
      this.game = game;
      console.log(this.game);
    });
  }
}
