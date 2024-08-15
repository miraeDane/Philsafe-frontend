import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceLoginComponent } from './police-login.component';

describe('PoliceLoginComponent', () => {
  let component: PoliceLoginComponent;
  let fixture: ComponentFixture<PoliceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliceLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
