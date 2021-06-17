import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonsListComponent } from './my-lessons-list.component';

describe('MyLessonsListComponent', () => {
  let component: MyLessonsListComponent;
  let fixture: ComponentFixture<MyLessonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLessonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
