import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalOutreachComponent } from './local-outreach.component';

describe('LocalOutreachComponent', () => {
  let component: LocalOutreachComponent;
  let fixture: ComponentFixture<LocalOutreachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalOutreachComponent]
    });
    fixture = TestBed.createComponent(LocalOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
