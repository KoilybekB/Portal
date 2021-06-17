import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMyGroupListComponent } from './t-my-group-list.component';

describe('TMyGroupListComponent', () => {
  let component: TMyGroupListComponent;
  let fixture: ComponentFixture<TMyGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TMyGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TMyGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
