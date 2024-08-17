import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationReportsComponent } from './station-reports.component';

describe('StationReportsComponent', () => {
  let component: StationReportsComponent;
  let fixture: ComponentFixture<StationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
