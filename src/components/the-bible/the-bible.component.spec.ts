import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBibleComponent } from './the-bible.component';

describe('TheBibleComponent', () => {
  let component: TheBibleComponent;
  let fixture: ComponentFixture<TheBibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheBibleComponent]
    });
    fixture = TestBed.createComponent(TheBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
