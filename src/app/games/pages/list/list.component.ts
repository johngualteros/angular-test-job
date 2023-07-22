import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game';
import { GamesService } from 'src/app/core/services/games.service';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  games: Game[] = this.gamesService.games;
  constructor(private gamesService: GamesService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.gamesService.getFilteredGames().subscribe((games: Game[]) => {
      this.games = games;
      console.log('games list ' + this.games.length);
    });

    // Suscribirse al observable para recibir actualizaciones del filtro
    this.filterService.platformFilter$.subscribe((selectedPlatform: string) => {
      this.gamesService.getFilteredGames(selectedPlatform).subscribe((games: Game[]) => {
        this.games = games;
        console.log('games list filtered ' + this.games.length);
      });
    });
  }
}
