import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationAddLocationComponent } from './station-add-location.component';

describe('StationAddLocationComponent', () => {
  let component: StationAddLocationComponent;
  let fixture: ComponentFixture<StationAddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationAddLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
