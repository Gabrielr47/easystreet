import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { CryptoService } from '../core/crypto.service';
import { Exchanges } from '../core/exchanges.interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public $keyUp = new Subject<KeyboardEvent>();
  $cryptoCurrencies: Observable<Exchanges> = this.cryptoService
    .$getCryptoCurrencies;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.$keyUp
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(console.log);
  }
}
