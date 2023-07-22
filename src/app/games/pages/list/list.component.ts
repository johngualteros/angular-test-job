import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  games: Game[] = [];
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games: Game[]) => {
      this.games = games;
    });
  }
}
