import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUsComponent } from './find-us.component';

describe('FindUsComponent', () => {
  let component: FindUsComponent;
  let fixture: ComponentFixture<FindUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindUsComponent]
    });
    fixture = TestBed.createComponent(FindUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
