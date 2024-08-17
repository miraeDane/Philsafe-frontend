import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCaseQueueComponent } from './station-case-queue.component';

describe('StationCaseQueueComponent', () => {
  let component: StationCaseQueueComponent;
  let fixture: ComponentFixture<StationCaseQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationCaseQueueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationCaseQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
