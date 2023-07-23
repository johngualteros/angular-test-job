import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DetailComponent],
      providers: [GamesService]
    });
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should call getSingleGame', () => {
    spyOn(component, 'getSingleGame');
    component.ngOnInit();
    expect(component.getSingleGame).toHaveBeenCalled();
  });

  it('should appear content', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content')).toBeTruthy();
  });
});
