import { Component } from '@angular/core';
import { Assets } from '@app/core/assets.interface';
import { CryptoService } from '@app/core/crypto.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  favoriteCrypto$ = this.cryptoService.favoriteCryptoCurrencies$;

  constructor(private cryptoService: CryptoService) {}

  removeFavorite(crypto: Assets): void {
    this.cryptoService.removeFavorite(crypto);
  }
}
