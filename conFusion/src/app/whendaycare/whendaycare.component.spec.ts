import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhendaycareComponent } from './whendaycare.component';

describe('WhendaycareComponent', () => {
  let component: WhendaycareComponent;
  let fixture: ComponentFixture<WhendaycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhendaycareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhendaycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
