import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOfficerComponent } from './add-new-officer.component';

describe('AddNewOfficerComponent', () => {
  let component: AddNewOfficerComponent;
  let fixture: ComponentFixture<AddNewOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewOfficerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
