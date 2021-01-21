import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CryptoModalComponent } from './crypto-modal.component';

describe('CryptoModalComponent', () => {
  let component: CryptoModalComponent;
  let fixture: ComponentFixture<CryptoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoModalComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
