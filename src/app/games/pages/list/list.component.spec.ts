import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GamesService } from 'src/app/core/services/games.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { SeparatorComponent } from 'src/app/shared/components/separator/separator.component';
import { CardComponent } from '../../components/card/card.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let gamesService: GamesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ListComponent, FilterComponent, SeparatorComponent, CardComponent, CarouselComponent],
      providers: [GamesService, FilterService]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should appear games', () => {
    expect(component.games).toBeTruthy();
  });

  it('should have attribute platform and genre', () => {
    expect(component.platform).toBe('');
    expect(component.genre).toBe('');
  });

  it('#ngOnInit should call platformFilter$', () => {
    const filterService = TestBed.inject(FilterService);
    spyOn(filterService.platformFilter$, 'subscribe');
    component.ngOnInit();
    expect(filterService.platformFilter$.subscribe).toHaveBeenCalled();
  });

  it('#ngOnInit should call genreFilter$', () => {
    const filterService = TestBed.inject(FilterService);
    spyOn(filterService.genreFilter$, 'subscribe');
    component.ngOnInit();
    expect(filterService.genreFilter$.subscribe).toHaveBeenCalled();
  });
});
