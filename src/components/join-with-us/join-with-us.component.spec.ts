import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinWithUsComponent } from './join-with-us.component';

describe('JoinWithUsComponent', () => {
  let component: JoinWithUsComponent;
  let fixture: ComponentFixture<JoinWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinWithUsComponent]
    });
    fixture = TestBed.createComponent(JoinWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
