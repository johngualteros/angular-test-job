import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map } from 'rxjs';
import { ModalService } from 'src/app/core/design/services/modal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;

  constructor(private searchModal: ModalService) { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    console.log(event.key);
    this.closeModal();
  }  

  closeModal(){
    this.searchModal.$openModal.emit(false);
  }

  ngAfterViewInit(): void {
    fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          const searchTerm = (event.target as HTMLInputElement).value;
          return searchTerm;
        }),
        filter((searchTerm: string) => searchTerm.length > 3),
        debounceTime(1000),
        distinct()
      )
      .subscribe((searchTerm: string) => {
        // this.getMovies(searchTerm);
      });
  }

  // getMovies(searchTerm: string){
  //   this.apiService.getSearchMovieName(searchTerm).subscribe((data: any) => {
  //     this.movies = data.results;
  //   });
  // }
}
