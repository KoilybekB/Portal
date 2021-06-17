import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayDiaryComponent } from './monday-diary.component';

describe('MondayDiaryComponent', () => {
  let component: MondayDiaryComponent;
  let fixture: ComponentFixture<MondayDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
