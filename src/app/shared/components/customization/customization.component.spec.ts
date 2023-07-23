import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationComponent } from './customization.component';
import { ThemesService } from 'src/app/core/design/services/themes.service';

describe('CustomizationComponent', () => {
  let component: CustomizationComponent;
  let fixture: ComponentFixture<CustomizationComponent>;
  let themesService: ThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomizationComponent],
      providers: [ThemesService]
    });
    fixture = TestBed.createComponent(CustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setTheme set theme', () => {
    themesService = TestBed.inject(ThemesService);
    const spy = spyOn(themesService, 'setTheme');
    component.setTheme('theme');
    expect(spy).toHaveBeenCalled();
  });

  it('should stablishTheme set theme', () => {
    themesService = TestBed.inject(ThemesService);
    const spy = spyOn(themesService, 'stablishTheme');
    component.setTheme('theme');
    expect(spy).toHaveBeenCalled();
  });

  it('should add class when click button blue', () => {
    const button = fixture.nativeElement.querySelector('.blue');
    button.click();
    fixture.detectChanges();
    const body = document.querySelector('body');
    expect(body?.classList).toContain('blue');
  });
});
