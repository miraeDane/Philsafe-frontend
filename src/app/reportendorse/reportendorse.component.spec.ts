import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportendorseComponent } from './reportendorse.component';

describe('ReportendorseComponent', () => {
  let component: ReportendorseComponent;
  let fixture: ComponentFixture<ReportendorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportendorseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportendorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
