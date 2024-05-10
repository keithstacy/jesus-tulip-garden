import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateImageHeightComponent } from './calculate-image-height.component';

describe('CalculateImageHeightComponent', () => {
  let component: CalculateImageHeightComponent;
  let fixture: ComponentFixture<CalculateImageHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateImageHeightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateImageHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
