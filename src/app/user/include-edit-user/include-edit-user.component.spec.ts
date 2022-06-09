import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeEditUserComponent } from './include-edit-user.component';

describe('IncludeEditUserComponent', () => {
  let component: IncludeEditUserComponent;
  let fixture: ComponentFixture<IncludeEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludeEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
