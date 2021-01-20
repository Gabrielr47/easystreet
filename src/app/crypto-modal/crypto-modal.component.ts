import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assets } from '../core/assets.interface';
import { CryptoService } from '../core/crypto.service';

@Component({
  selector: 'app-crypto-modal',
  templateUrl: './crypto-modal.component.html',
  styleUrls: ['./crypto-modal.component.scss'],
})
export class CryptoModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CryptoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { crypto: Assets },
    private cryptoService: CryptoService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  addCryptoToFavorites(): void {
    this.cryptoService.addCryptoToFavorites(this.data.crypto);
    this.onClose();
  }
}
