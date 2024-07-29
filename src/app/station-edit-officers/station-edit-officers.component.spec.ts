import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationEditOfficersComponent } from './station-edit-officers.component';

describe('StationEditOfficersComponent', () => {
  let component: StationEditOfficersComponent;
  let fixture: ComponentFixture<StationEditOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationEditOfficersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationEditOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
