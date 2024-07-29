import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativeOfIncidentComponent } from './narrative-of-incident.component';

describe('NarrativeOfIncidentComponent', () => {
  let component: NarrativeOfIncidentComponent;
  let fixture: ComponentFixture<NarrativeOfIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NarrativeOfIncidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NarrativeOfIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
