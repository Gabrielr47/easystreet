import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CryptoService } from './crypto.service';
import { Assets } from './assets.interface';

describe('CryptoService', () => {
  let httpMock: HttpTestingController;
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [CryptoService],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cryptoCurrencies$ when subscribed', () => {
    let actualCryptoCurrencies: Assets[];
    service.cryptoCurrencies$.subscribe((c) => (actualCryptoCurrencies = c));

    const expectedCryptoCurrencies = {} as Assets[];
    httpMock.expectOne('assets').flush(expectedCryptoCurrencies);
    expect(actualCryptoCurrencies).toBe(expectedCryptoCurrencies);
  });
});
