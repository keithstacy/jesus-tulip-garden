import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFamilyComponent } from './global-family.component';

describe('GlobalFamilyComponent', () => {
  let component: GlobalFamilyComponent;
  let fixture: ComponentFixture<GlobalFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalFamilyComponent]
    });
    fixture = TestBed.createComponent(GlobalFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
