import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should change currentSlide', () => {
    component.ngOnInit();
    expect(component.currentSlide).toBe(0);
  });

  it('should change currentSlide', () => {
    component.ngOnInit();
    component.games = [
      {
        id: 1,
        title: 'title',
        thumbnail: 'thumbnail',
        short_description: 'short_description',
        game_url: 'game_url',
        genre: 'genre',
        platform: 'platform',
        publisher: 'publisher',
        developer: 'developer',
        release_date: 'release_date',
        freetogame_profile_url: 'freetogame_profile_url'
      }
    ];
    component.ngOnInit();
    expect(component.currentSlide).toBe(0);
  });

  it('should appear carousel', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.carousel')).toBeTruthy(); 
  });
});
