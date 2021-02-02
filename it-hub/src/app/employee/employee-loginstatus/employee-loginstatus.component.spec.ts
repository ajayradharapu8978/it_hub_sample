import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginstatusComponent } from './employee-loginstatus.component';

describe('EmployeeLoginstatusComponent', () => {
  let component: EmployeeLoginstatusComponent;
  let fixture: ComponentFixture<EmployeeLoginstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoginstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoginstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
