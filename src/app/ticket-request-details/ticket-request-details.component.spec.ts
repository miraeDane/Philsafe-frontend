import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRequestDetailsComponent } from './ticket-request-details.component';

describe('TicketRequestDetailsComponent', () => {
  let component: TicketRequestDetailsComponent;
  let fixture: ComponentFixture<TicketRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
