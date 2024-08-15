import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitnessRegisterComponent } from './witness-register.component';

describe('WitnessRegisterComponent', () => {
  let component: WitnessRegisterComponent;
  let fixture: ComponentFixture<WitnessRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WitnessRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WitnessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
