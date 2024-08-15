import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCrimeMapComponent } from './station-crime-map.component';

describe('StationCrimeMapComponent', () => {
  let component: StationCrimeMapComponent;
  let fixture: ComponentFixture<StationCrimeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationCrimeMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationCrimeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
