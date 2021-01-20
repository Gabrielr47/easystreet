import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../core/crypto.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favoriteCrypto$ = this.cryptoService.getFavoriteCryptoCurrencies();

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {}
}
