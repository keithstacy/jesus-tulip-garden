import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeTeachComponent } from './how-we-teach.component';

describe('HowWeTeachComponent', () => {
  let component: HowWeTeachComponent;
  let fixture: ComponentFixture<HowWeTeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowWeTeachComponent]
    });
    fixture = TestBed.createComponent(HowWeTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
