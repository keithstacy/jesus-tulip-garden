import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorBioComponent } from './pastor-bio.component';

describe('PastorBioComponent', () => {
  let component: PastorBioComponent;
  let fixture: ComponentFixture<PastorBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastorBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastorBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
