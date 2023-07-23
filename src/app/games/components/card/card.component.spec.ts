import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have game property', () => {
    expect(component.game).toBeTruthy();
  });

  it('should receive game property', () => {
    let game = {
      id: 1,
      title: 'Test',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: ''
    };
    component.game = game;
    expect(component.game).toBe(game);
  });

  it('should have a card', () => {
    let card = fixture.nativeElement.querySelector('.card');
    expect(card).toBeTruthy();
  });
});
