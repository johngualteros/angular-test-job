import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/core/interfaces/game';
import { FilterService } from 'src/app/core/services/filter.service';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  constructor(private gamesService: GamesService, private filterService: FilterService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  platforms: string[] = [
    'pc',
    'browser',
  ];

  selectPlatform: string = '';

  selectPlatformChange(event: string) {
    this.selectPlatform = event;
    if(this.selectPlatform != '') {
      this.filterService.setPlatformFilter(this.selectPlatform);
      // this.gamesService.getFilteredGames(this.selectPlatform).subscribe((games: Game[]) => {
      //   this.gamesService.games = games;
      // });
    }
  }
}
