import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingPersonComponent } from './reporting-person.component';

describe('ReportingPersonComponent', () => {
  let component: ReportingPersonComponent;
  let fixture: ComponentFixture<ReportingPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
