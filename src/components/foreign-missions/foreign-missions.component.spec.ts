import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignMissionsComponent } from './foreign-missions.component';

describe('ForeignMissionsComponent', () => {
  let component: ForeignMissionsComponent;
  let fixture: ComponentFixture<ForeignMissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeignMissionsComponent]
    });
    fixture = TestBed.createComponent(ForeignMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
