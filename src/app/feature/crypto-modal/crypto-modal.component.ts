import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Assets } from '@app/core/assets.interface';
import { CryptoService } from '@app/core/crypto.service';

@Component({
  selector: 'app-crypto-modal',
  templateUrl: './crypto-modal.component.html',
  styleUrls: ['./crypto-modal.component.scss'],
})
export class CryptoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CryptoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { crypto: Assets },
    private cryptoService: CryptoService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  addCryptoToFavorites(): void {
    this.cryptoService.addCryptoToFavorites(this.data.crypto);
    this.onClose();
  }
}
