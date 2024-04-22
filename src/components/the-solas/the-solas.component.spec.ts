import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSolasComponent } from './the-solas.component';

describe('TheSolasComponent', () => {
  let component: TheSolasComponent;
  let fixture: ComponentFixture<TheSolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheSolasComponent]
    });
    fixture = TestBed.createComponent(TheSolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
