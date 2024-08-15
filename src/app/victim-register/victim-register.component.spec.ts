import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimRegisterComponent } from './victim-register.component';

describe('VictimRegisterComponent', () => {
  let component: VictimRegisterComponent;
  let fixture: ComponentFixture<VictimRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VictimRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VictimRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
