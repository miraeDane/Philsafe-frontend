import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeMapComponent } from './crime-map.component';
import { MapboxService } from '../mapbox.service'; 

describe('CrimeMapComponent', () => {
  let component: CrimeMapComponent;
  let fixture: ComponentFixture<CrimeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrimeMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrimeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
