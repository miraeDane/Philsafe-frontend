import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimDataComponent } from './victim-data.component';

describe('VictimDataComponent', () => {
  let component: VictimDataComponent;
  let fixture: ComponentFixture<VictimDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VictimDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VictimDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
