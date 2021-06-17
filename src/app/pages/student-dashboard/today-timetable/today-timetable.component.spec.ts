import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTimetableComponent } from './today-timetable.component';

describe('TodayTimetableComponent', () => {
  let component: TodayTimetableComponent;
  let fixture: ComponentFixture<TodayTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
