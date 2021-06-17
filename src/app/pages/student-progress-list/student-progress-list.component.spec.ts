import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgressListComponent } from './student-progress-list.component';

describe('StudentProgressListComponent', () => {
  let component: StudentProgressListComponent;
  let fixture: ComponentFixture<StudentProgressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
