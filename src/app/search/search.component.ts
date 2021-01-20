import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Assets } from '../core/assets.interface';
import { CryptoService } from '../core/crypto.service';
import { CryptoModalComponent } from '../crypto-modal/crypto-modal.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public $keyUp = new Subject<KeyboardEvent>();
  filteredCrypto$: Observable<Assets[]>;

  constructor(private cryptoService: CryptoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.filteredCrypto$ = combineLatest([
      this.cryptoService.$getCryptoCurrencies,
      this.$keyUp.pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      ),
    ]).pipe(
      map(([crypto, term]) => {
        return crypto.filter((v) =>
          v.name ? v.name.toLowerCase().indexOf(term.toLowerCase()) > -1 : false
        );
      })
    );
  }

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
}
