import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';

import { Assets } from '@app/core/assets.interface';
import { CryptoService } from '@app/core/crypto.service';
import { CryptoModalComponent } from '@app/feature/crypto-modal/crypto-modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  keyUp$ = new Subject<KeyboardEvent>();
  filteredCrypto$: Observable<Assets[]> = combineLatest([
    this.cryptoService.cryptoCurrencies$,
    this.keyUp$.pipe(
      map((event: any) => event.target.value),
      filter((term) => term.length > 1),
      debounceTime(200),
      distinctUntilChanged()
    ),
  ]).pipe(
    map(([crypto, term]) => {
      return crypto.filter((v) =>
        v.name ? v.name.toLowerCase().indexOf(term.toLowerCase()) > -1 : false
      );
    })
  );

  constructor(private cryptoService: CryptoService, public dialog: MatDialog) {}

  onSelectionChange(event: any, crypto: Assets): void {
    if (event.source.selected) {
      this.dialog.open(CryptoModalComponent, {
        width: '400px',
        data: {
          crypto,
        },
      });
    }
  }

  getObjectIdentity(i: number, item: Assets): string {
    return item.asset_id;
  }
}
