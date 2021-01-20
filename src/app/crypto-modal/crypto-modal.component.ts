import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assets } from '../core/assets.interface';

@Component({
  selector: 'app-crypto-modal',
  templateUrl: './crypto-modal.component.html',
  styleUrls: ['./crypto-modal.component.scss'],
})
export class CryptoModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CryptoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { crypto: Assets }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  addCrypto(): void {
    this.onClose();
  }
}
