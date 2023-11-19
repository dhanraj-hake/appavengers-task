import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgResponseComponent } from './avg-response.component';

describe('AvgResponseComponent', () => {
  let component: AvgResponseComponent;
  let fixture: ComponentFixture<AvgResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
