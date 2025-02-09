import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedisplayComponent } from './employeedisplay.component';

describe('EmployeedisplayComponent', () => {
  let component: EmployeedisplayComponent;
  let fixture: ComponentFixture<EmployeedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
