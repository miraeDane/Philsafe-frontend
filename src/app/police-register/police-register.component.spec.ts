import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceRegisterComponent } from './police-register.component';

describe('PoliceRegisterComponent', () => {
  let component: PoliceRegisterComponent;
  let fixture: ComponentFixture<PoliceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliceRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
