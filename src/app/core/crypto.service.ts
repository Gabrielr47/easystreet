import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assets } from './assets.interface';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private http: HttpClient) {}

  $getCryptoCurrencies: Observable<Assets[]> = this.http.get<Assets[]>(
    'assets'
  );
}
