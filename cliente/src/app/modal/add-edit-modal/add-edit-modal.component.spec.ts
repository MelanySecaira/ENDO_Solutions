import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditModalComponent } from './add-edit-modal.component';

describe('AddEditModalComponent', () => {
  let component: AddEditModalComponent;
  let fixture: ComponentFixture<AddEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditModalComponent]
    });
    fixture = TestBed.createComponent(AddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
