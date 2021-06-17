import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTodayTimetableComponent } from './t-today-timetable.component';

describe('TTodayTimetableComponent', () => {
  let component: TTodayTimetableComponent;
  let fixture: ComponentFixture<TTodayTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTodayTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TTodayTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
