import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MatDialogModule
} from '@angular/material';
import { inject } from '@angular/core/testing';

class MatDialogRefMock {
  close() {}
};

describe('AddDialogComponent', () => {
  let component: AddDialogComponent;
  let fixture: ComponentFixture<AddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ AddDialogComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog', () => {
    // TODO   ...expect closeDialog method to be called
  });

  it('should close dialog and pass person value', () => {
    // TODO
  });

  it('closeDialog should call closing service of dialog', inject([MatDialogRef], (dialogRef) => {
    // TODO
  }));
});
