import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReportsWitnessComponent } from './my-reports-witness.component';

describe('MyReportsWitnessComponent', () => {
  let component: MyReportsWitnessComponent;
  let fixture: ComponentFixture<MyReportsWitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyReportsWitnessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyReportsWitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
