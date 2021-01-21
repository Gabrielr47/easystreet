import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assets } from './assets.interface';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'assets';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  cryptoCurrencies$: Observable<Assets[]> = this.http.get<Assets[]>('assets');

  favoriteCryptoCurrencies$ = new BehaviorSubject<Assets[]>(
    this.favoriteCryptoCurrencies
  );

  get favoriteCryptoCurrencies(): Assets[] {
    return this.storage.get(STORAGE_KEY);
  }

  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private snackBar: MatSnackBar
  ) {}

  addCryptoToFavorites(crypto: Assets): void {
    const current = this.storage.get(STORAGE_KEY) || [];

    if (current.some((c: Assets) => c.asset_id === crypto.asset_id)) {
      this.cryptoMessage(
        crypto.name + ' was already added to your list of favorites.'
      );
      return;
    }

    current.push(crypto);
    this.storage.set(STORAGE_KEY, current);
    this.favoriteCryptoCurrencies$.next(this.favoriteCryptoCurrencies);
  }

  removeFavorite(crypto: Assets): void {
    const current = this.favoriteCryptoCurrencies.filter(
      (c) => c.name !== crypto.name
    );
    this.storage.set(STORAGE_KEY, current);
    this.favoriteCryptoCurrencies$.next(this.favoriteCryptoCurrencies);
    this.cryptoMessage(crypto.name + ' was removed with success!');
  }

  cryptoMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
