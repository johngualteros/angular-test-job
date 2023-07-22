import { Component, HostListener, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/design/services/modal.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private gamesService: GamesService,
    private filterService: FilterService,
    private searchModal: ModalService
  ) {}
  ngOnInit(): void {
    this.searchModal.$openModal.subscribe((value) => {
      this.searchInput = value;
    });
  }

  platforms: string[] = ['pc', 'browser'];

  genres: string[] = [
    'mmorpg',
    'shooter',
    ' strategy',
    ' moba',
    ' racing',
    ' sports',
    ' social',
    ' sandbox',
    'open-world',
    ' survival',
    ' pvp',
    ' pve',
    ' pixel',
    ' voxel',
    ' zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];

  selectPlatform: string = '';
  selectGenre: string = '';

  selectPlatformChange(event: string) {
    this.selectPlatform = event;
    if (this.selectPlatform != '') {
      this.filterService.setPlatformFilter(this.selectPlatform);
    }
  }

  selectGenreChange(event: string) {
    this.selectGenre = event;
    if (this.selectGenre != '') {
      this.filterService.setGenreFilter(this.selectGenre);
    }
  }

  // FUNCIOTNS FOR SEARCH A GAME
  searchInput: boolean = false;

  open() {
    this.searchModal.$openModal.emit(true);
  }

  @HostListener('document:keydown.control.k', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.searchInputToggle();
  }

  searchInputToggle(): void {
    this.searchModal.$openModal.emit(true);
  }
}
