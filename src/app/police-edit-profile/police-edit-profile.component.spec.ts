import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceEditProfileComponent } from './police-edit-profile.component';

describe('PoliceEditProfileComponent', () => {
  let component: PoliceEditProfileComponent;
  let fixture: ComponentFixture<PoliceEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliceEditProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliceEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
