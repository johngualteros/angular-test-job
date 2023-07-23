import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorComponent } from './separator.component';

describe('SeparatorComponent', () => {
  let component: SeparatorComponent;
  let fixture: ComponentFixture<SeparatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeparatorComponent]
    });
    fixture = TestBed.createComponent(SeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should appear separator', () => {
    const separator = fixture.nativeElement.querySelector('.separator');
    expect(separator).toBeTruthy();
  });
});
