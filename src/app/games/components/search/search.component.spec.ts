import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { GamesService } from 'src/app/core/services/games.service';
import { ModalService } from 'src/app/core/design/services/modal.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchComponent],
      providers: [ModalService, GamesService]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have gameSearchInput', () => {
    expect(component.gameSearchInput).toBeTruthy();
  });

  it('should have games', () => {
    expect(component.games).toBeTruthy();
  });

  it('should have filteredGames', () => {
    expect(component.filteredGames).toBeTruthy();
  });

  it('should have closeModal', () => {
    expect(component.closeModal).toBeTruthy();
  });

  it('should have ngAfterViewInit', () => {
    expect(component.ngAfterViewInit).toBeTruthy();
  });

  it('should have getGames', () => {
    expect(component.getGames).toBeTruthy();
  });

  it('validate get games filtered', () => {
    const games = [
      {
        id: 1,
        title: 'call of duty',
        thumbnail: '',
        short_description: '',
        game_url: '',
        genre: '',
        platform: '',
        publisher: '',
        developer: '',
        release_date: '',
        freetogame_profile_url: '',
      },
      {
        id: 2,
        title: 'dragon ball',
        thumbnail: '',
        short_description: '',
        game_url: '',
        genre: '',
        platform: '',
        publisher: '',
        developer: '',
        release_date: '',
        freetogame_profile_url: '',
      }
    ]
    component.games = games;
    fixture.detectChanges();
    component.getGames('call');
    expect(component.filteredGames.length).toBe(1);
  });

  it('validate if appear modal', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('Busca tu Juego Favorito');
  });

  it('validate if appear input search', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });

  it('validate if appear esc', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.esc-key').textContent).toBe('Esc');
  });

  it('validate if appear results', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.results')).toBeTruthy();
  });
});
