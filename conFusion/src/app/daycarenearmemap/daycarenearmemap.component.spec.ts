import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaycarenearmemapComponent } from './daycarenearmemap.component';

describe('DaycarenearmemapComponent', () => {
  let component: DaycarenearmemapComponent;
  let fixture: ComponentFixture<DaycarenearmemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaycarenearmemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaycarenearmemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
