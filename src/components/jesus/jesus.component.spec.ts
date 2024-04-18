import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesusComponent } from './jesus.component';

describe('JesusComponent', () => {
  let component: JesusComponent;
  let fixture: ComponentFixture<JesusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JesusComponent]
    });
    fixture = TestBed.createComponent(JesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
