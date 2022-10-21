import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberofkidsComponent } from './numberofkids.component';

describe('NumberofkidsComponent', () => {
  let component: NumberofkidsComponent;
  let fixture: ComponentFixture<NumberofkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberofkidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberofkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
