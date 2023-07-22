import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map } from 'rxjs';
import { ModalService } from 'src/app/core/design/services/modal.service';
import { Game } from 'src/app/core/interfaces/game';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('gameSearchInput') gameSearchInput: ElementRef;
  games: Game[] = [];
  filteredGames: Game[] = [];
  constructor(private searchModal: ModalService, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gamesService.games;
    this.filteredGames = this.games;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.closeModal();
  }  

  closeModal(){
    this.searchModal.$openModal.emit(false);
  }

  ngAfterViewInit(): void {
    fromEvent<Event>(this.gameSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          const searchTerm = (event.target as HTMLInputElement).value;
          return searchTerm;
        }),
        filter((searchTerm: string) => searchTerm.length > 2 || searchTerm.length === 0),
        debounceTime(1000),
        distinct()
      )
      .subscribe((searchTerm: string) => {
        this.getGames(searchTerm);
      });
  }

  getGames(searchTerm: string){
    this.filteredGames = this.games.filter((game: Game) => {
      return game.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
