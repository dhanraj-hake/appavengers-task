import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFailedComponent } from './most-failed.component';

describe('MostFailedComponent', () => {
  let component: MostFailedComponent;
  let fixture: ComponentFixture<MostFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
