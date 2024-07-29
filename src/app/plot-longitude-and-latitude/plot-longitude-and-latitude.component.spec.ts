import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotLongitudeAndLatitudeComponent } from './plot-longitude-and-latitude.component';

describe('PlotLongitudeAndLatitudeComponent', () => {
  let component: PlotLongitudeAndLatitudeComponent;
  let fixture: ComponentFixture<PlotLongitudeAndLatitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlotLongitudeAndLatitudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlotLongitudeAndLatitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
