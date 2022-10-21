import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheredaycareComponent } from './wheredaycare.component';

describe('WheredaycareComponent', () => {
  let component: WheredaycareComponent;
  let fixture: ComponentFixture<WheredaycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheredaycareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheredaycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
