import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { SeparatorComponent } from 'src/app/shared/components/separator/separator.component';
import { CustomizationComponent } from 'src/app/shared/components/customization/customization.component';
import { By } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

@Component({
  template: ''
})
class DummyComponent {
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotifierModule, CommonModule, RouterTestingModule],
      declarations: [
        HomeComponent,
        HeaderComponent,
        SeparatorComponent,
        CustomizationComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a header component', () => {
    const headerComponent = fixture.debugElement.query(
      By.directive(HeaderComponent)
    );
    expect(headerComponent).toBeTruthy();
  });

  it('should button redirect to games', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button[routerLink="/games"]'));
    expect(button).toBeTruthy();

    const routerLink = button.nativeElement.getAttribute('routerLink');
    expect(routerLink).toEqual('/games');
  });

  it('should render a separator component', () => {
    const separatorComponent = fixture.debugElement.query(
      By.directive(SeparatorComponent)
    );
    expect(separatorComponent).toBeTruthy();
  });

  it('should render a customization component', () => {
    const customizationComponent = fixture.debugElement.query(
      By.directive(CustomizationComponent)
    );
    expect(customizationComponent).toBeTruthy();
  });
});
