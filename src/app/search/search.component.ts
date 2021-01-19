import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Assets } from '../core/assets.interface';
import { CryptoService } from '../core/crypto.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public $keyUp = new Subject<KeyboardEvent>();
  filteredCrypto$: Observable<Assets[]>;

  constructor(private cryptoService: CryptoService) {}

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
}
