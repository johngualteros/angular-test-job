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
  // reference to input search
  @ViewChild('gameSearchInput') gameSearchInput: ElementRef;
  games: Game[] = [];
  filteredGames: Game[] = [];
  constructor(private searchModal: ModalService, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gamesService.games;
    this.filteredGames = this.games;
  }

  // method for close modal when press escape key
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.closeModal();
  }  

  closeModal(){
    this.searchModal.$openModal.emit(false);
  }

  // method for search a game after view init
  ngAfterViewInit(): void {
    // from event keyup in input search
    fromEvent<Event>(this.gameSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          // return only the value of input
          const searchTerm = (event.target as HTMLInputElement).value;
          return searchTerm;
        }),
        // filter the search term if it's length is greater than 2 or if it's empty
        filter((searchTerm: string) => searchTerm.length > 2 || searchTerm.length === 0),
        // wait 1 second after the last event emitted
        debounceTime(1000),
        // emit only distinct values
        distinct()
      )
      // subscribe to the observable
      .subscribe((searchTerm: string) => {
        this.getGames(searchTerm);
      });
  }

  /**
   * method for filter games by title
   * @param searchTerm
   * @returns void
   * @memberof SearchComponent
   * @description filter games by title and save the result in filteredGames
   * @example
   * getGames('war')
  */
  getGames(searchTerm: string){
    this.filteredGames = this.games.filter((game: Game) => {
      return game.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
