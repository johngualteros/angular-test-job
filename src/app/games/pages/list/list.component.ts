import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game';
import { GamesService } from 'src/app/core/services/games.service';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  games: Game[] = this.gamesService.games;
  platform: string = '';
  genre: string = '';
  constructor(private gamesService: GamesService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.gamesService.getFilteredGames().subscribe((games: Game[]) => {
      this.games = games;
    });

    // Suscribirse al observable para recibir actualizaciones del filtro
    this.filterService.platformFilter$.subscribe((selectedPlatform: string) => {
      this.platform = selectedPlatform;
      this.gamesService.getFilteredGames(selectedPlatform, this.genre).subscribe((games: Game[]) => {
        this.games = games;
      });
    });

    // Suscribirse al observable para recibir actualizaciones del filtro
    this.filterService.genreFilter$.subscribe((selectedGenre: string) => {
      this.genre = selectedGenre;
      this.gamesService.getFilteredGames(this.platform, selectedGenre).subscribe((games: Game[]) => {
        this.games = games;
      });
    });
  }
}
