import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { GamesService } from 'src/app/core/services/games.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { ModalService } from 'src/app/core/design/services/modal.service';
import { SearchComponent } from '../search/search.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let service: ModalService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent, SearchComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        GamesService,
        FilterService,
        ModalService
      ]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should platforms size be 2', () => {
    expect(component.platforms.length).toBe(2);
  });

  it('should genres size be 32', () => {
    expect(component.genres.length).toBe(45);
  });

  it('should have a selectPlatform and selectGenre', () => {
    expect(component.selectPlatform).toEqual('');
    expect(component.selectGenre).toEqual('');
  });

  it('should selectPlatformChange change value', () => {
    component.selectPlatformChange('pc');
    expect(component.selectPlatform).toBe('pc');
  });

  it('should selectGenreChange change value', () => {
    component.selectGenreChange('mmorpg');
    expect(component.selectGenre).toBe('mmorpg');
  });

  it('should searchInput be false', () => {
    expect(component.searchInput).toBeFalsy();
  });

  it('should appear input "Buscar"',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Buscar');
  });

  it('should not appear app-search when searchInput is  false',() => {
    const searchComponent = fixture.debugElement.query(
      By.directive(SearchComponent)
    );
    expect(component.searchInput).toBeFalsy();
    expect(searchComponent).toBeFalsy();
  });

  it('should appear app-search when searchInput is true',() => {
    component.searchInput = true;
    fixture.detectChanges();
    const searchComponent = fixture.debugElement.query(
      By.directive(SearchComponent)
    );
    expect(component.searchInput).toBeTruthy();
    expect(searchComponent).toBeTruthy();
  });

  it('should appear select for platform', () => {
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('#platform');
    expect(select).toBeTruthy();
  });

  it('should appear select for genre', () => {
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('#genre');
    expect(select).toBeTruthy();
  });
});
