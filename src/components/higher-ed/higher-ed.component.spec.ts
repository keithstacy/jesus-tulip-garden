import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherEdComponent } from './higher-ed.component';

describe('HigherEdComponent', () => {
  let component: HigherEdComponent;
  let fixture: ComponentFixture<HigherEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HigherEdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HigherEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
