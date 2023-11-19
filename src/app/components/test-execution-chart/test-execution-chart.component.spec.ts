import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExecutionChartComponent } from './test-execution-chart.component';

describe('TestExecutionChartComponent', () => {
  let component: TestExecutionChartComponent;
  let fixture: ComponentFixture<TestExecutionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExecutionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExecutionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
