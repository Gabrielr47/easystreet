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
  getCryptoCurrencies$: Observable<Assets[]> = this.http.get<Assets[]>(
    'assets'
  );

  getFavoriteCryptoCurrencies$ = new BehaviorSubject<Assets[]>(
    this.getFavoriteCryptoCurrencies()
  );

  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private snackBar: MatSnackBar
  ) {}

  getFavoriteCryptoCurrencies(): Assets[] {
    return this.storage.get(STORAGE_KEY);
  }

  addCryptoToFavorites(crypto: Assets): void {
    const current = this.storage.get(STORAGE_KEY) || [];
    if (!current.some((c: Assets) => c.asset_id === crypto.asset_id)) {
      current.push(crypto);
      this.storage.set(STORAGE_KEY, current);
      this.getFavoriteCryptoCurrencies$.next(
        this.getFavoriteCryptoCurrencies()
      );
    } else {
      this.cryptoMessage(
        crypto.name + ' was already added to your list of favorites.'
      );
    }
  }

  removeFavorite(crypto: Assets): void {
    const current = this.getFavoriteCryptoCurrencies().filter(
      (c) => c.name !== crypto.name
    );
    this.storage.set(STORAGE_KEY, current);
    this.getFavoriteCryptoCurrencies$.next(this.getFavoriteCryptoCurrencies());
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
