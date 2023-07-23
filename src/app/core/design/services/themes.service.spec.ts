import { TestBed } from '@angular/core/testing';

import { ThemesService } from './themes.service';

describe('ThemesService', () => {
  let service: ThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have theme$ property', () => {
    expect(service.theme$).toBeTruthy();
  });

  it('should setTheme method add in Local Storage', () => {
    service.setTheme('blue');
    expect(localStorage.getItem('theme')).toEqual('blue');
  });

  it('should getTheme method return blue', () => {
    expect(service.getTheme()).toEqual('blue');
  });

  it('should stablishTheme method set body class', () => {
    service.stablishTheme('blue');
    expect(document.body.className).toEqual('blue');
  });



});
