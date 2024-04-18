import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceComponent } from './grace.component';

describe('GraceComponent', () => {
  let component: GraceComponent;
  let fixture: ComponentFixture<GraceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraceComponent]
    });
    fixture = TestBed.createComponent(GraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
