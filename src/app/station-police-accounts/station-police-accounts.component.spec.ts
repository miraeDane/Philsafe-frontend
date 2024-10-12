import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPoliceAccountsComponent } from './station-police-accounts.component';

describe('StationPoliceAccountsComponent', () => {
  let component: StationPoliceAccountsComponent;
  let fixture: ComponentFixture<StationPoliceAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationPoliceAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationPoliceAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
