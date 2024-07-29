import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectDataComponent } from './suspect-data.component';

describe('SuspectDataComponent', () => {
  let component: SuspectDataComponent;
  let fixture: ComponentFixture<SuspectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuspectDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuspectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
