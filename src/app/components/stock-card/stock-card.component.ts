import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FinnhubService} from "../../services/finnhub.service";
import {Company, QuoteResponse} from "../../model/company-data";
import {Subscription} from "rxjs";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit, OnDestroy {

  @Input()
  symbol = '';

  loaded = false;
  company!: Company;
  quote!: QuoteResponse;


  private loadedSubs = 0;
  private subs: Subscription[] = [];

  constructor(public finnhubService: FinnhubService,
              public storageService: StorageService) {
  }

  ngOnInit(): void {
    this.subs.push(this.finnhubService.getCompany(this.symbol).subscribe(value => {
      this.company = value;
      this.loaded = ++this.loadedSubs == this.subs.length;
    }));
    this.subs.push(this.finnhubService.getQuote(this.symbol).subscribe(value => {
      this.quote = value;
      this.loaded = ++this.loadedSubs == this.subs.length;
    }));
  }


  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  remove() {
    this.storageService.remove(this.symbol);
  }
}
