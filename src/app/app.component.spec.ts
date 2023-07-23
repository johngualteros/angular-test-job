import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ThemesService } from './core/design/services/themes.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { NotifierModule } from 'angular-notifier';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, NotifierModule],
    declarations: [AppComponent, LoaderComponent],
    providers: [ThemesService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should appear loader', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const loaderComponent = fixture.debugElement.query(
      By.directive(LoaderComponent)
    );
    expect(loaderComponent).toBeTruthy();
  });
});
