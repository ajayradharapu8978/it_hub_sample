import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompaniesComponent } from './add-companies.component';

describe('AddCompaniesComponent', () => {
  let component: AddCompaniesComponent;
  let fixture: ComponentFixture<AddCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
