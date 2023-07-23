import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardComponent } from './mini-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MiniCardComponent', () => {
  let component: MiniCardComponent;
  let fixture: ComponentFixture<MiniCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MiniCardComponent]
    });
    fixture = TestBed.createComponent(MiniCardComponent);
    component = fixture.componentInstance;
    const game = {
      id: 0,
      title: 'test',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: '',
    };
    component.game = game;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should game be defined', () => {
    expect(component.game.id).toBe(0);
  });

  it('should have a mini card', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.game')).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('test');
  });
});
