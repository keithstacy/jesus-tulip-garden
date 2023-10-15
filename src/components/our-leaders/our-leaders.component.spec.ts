import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLeadersComponent } from './our-leaders.component';

describe('OurLeadersComponent', () => {
  let component: OurLeadersComponent;
  let fixture: ComponentFixture<OurLeadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLeadersComponent]
    });
    fixture = TestBed.createComponent(OurLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
