import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TithingComponent } from './tithing.component';

describe('TithingComponent', () => {
  let component: TithingComponent;
  let fixture: ComponentFixture<TithingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TithingComponent]
    });
    fixture = TestBed.createComponent(TithingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
