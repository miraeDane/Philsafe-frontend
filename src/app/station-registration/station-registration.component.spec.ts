import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationRegistrationComponent } from './station-registration.component';

describe('StationRegistrationComponent', () => {
  let component: StationRegistrationComponent;
  let fixture: ComponentFixture<StationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
