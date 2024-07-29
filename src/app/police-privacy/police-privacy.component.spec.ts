import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicePrivacyComponent } from './police-privacy.component';

describe('PolicePrivacyComponent', () => {
  let component: PolicePrivacyComponent;
  let fixture: ComponentFixture<PolicePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolicePrivacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
