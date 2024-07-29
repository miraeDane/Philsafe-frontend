import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceJurisdictionComponent } from './police-jurisdiction.component';

describe('PoliceJurisdictionComponent', () => {
  let component: PoliceJurisdictionComponent;
  let fixture: ComponentFixture<PoliceJurisdictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliceJurisdictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliceJurisdictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
