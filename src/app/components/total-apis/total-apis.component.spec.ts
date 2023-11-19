import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalApisComponent } from './total-apis.component';

describe('TotalApisComponent', () => {
  let component: TotalApisComponent;
  let fixture: ComponentFixture<TotalApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalApisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
