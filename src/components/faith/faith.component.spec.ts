import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithComponent } from './faith.component';

describe('FaithComponent', () => {
  let component: FaithComponent;
  let fixture: ComponentFixture<FaithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaithComponent]
    });
    fixture = TestBed.createComponent(FaithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
