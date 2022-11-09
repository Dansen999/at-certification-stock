import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FinnhubService} from "../../services/finnhub.service";
import {Company, QuoteResponse} from "../../model/company-data";
import {Subject, Subscription} from "rxjs";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit, OnDestroy {

  @Input()
  company = {} as Company;

  private _quote$ = new Subject<QuoteResponse>();
  private subs: Subscription[] = [];

  constructor(public finnhubService: FinnhubService,
              public storageService: StorageService) {
  }

  ngOnInit(): void {
    this.subs.push(this.finnhubService.getQuote(this.company.symbol).subscribe(value => this._quote$.next(value)));
  }

  getQuote(): Subject<QuoteResponse> {
    return this._quote$;
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    this._quote$.complete();
  }

  remove() {
    this.storageService.remove(this.company.symbol);
  }
}
