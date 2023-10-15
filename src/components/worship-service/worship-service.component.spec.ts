import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipServiceComponent } from './worship-service.component';

describe('WorshipServiceComponent', () => {
  let component: WorshipServiceComponent;
  let fixture: ComponentFixture<WorshipServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorshipServiceComponent]
    });
    fixture = TestBed.createComponent(WorshipServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
