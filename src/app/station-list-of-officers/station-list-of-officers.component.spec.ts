import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationListOfOfficersComponent } from './station-list-of-officers.component';

describe('StationListOfOfficersComponent', () => {
  let component: StationListOfOfficersComponent;
  let fixture: ComponentFixture<StationListOfOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationListOfOfficersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationListOfOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
