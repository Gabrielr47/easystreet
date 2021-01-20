import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assets } from './assets.interface';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'assets';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  getCryptoCurrencies$: Observable<Assets[]> = this.http.get<Assets[]>(
    'assets'
  );

  addCryptoToFavorites(crypto: Assets): void {
    const current = this.storage.get(STORAGE_KEY) || [];
    if (!current.some((c: Assets) => c.asset_id === crypto.asset_id)) {
      current.push(crypto);
      this.storage.set(STORAGE_KEY, current);
    }
  }

  getFavoriteCryptoCurrencies(): Assets[] {
    return this.storage.get(STORAGE_KEY);
  }
}
