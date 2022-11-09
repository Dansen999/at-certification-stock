import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Company, InsiderSentimentData} from "../../model/company-data";
import {FinnhubService} from "../../services/finnhub.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sentiment-card',
  templateUrl: './sentiment-card.component.html',
  styleUrls: ['./sentiment-card.component.css']
})
export class SentimentCardComponent implements OnInit, OnDestroy {

  @Input()
  symbol = '';

  loaded = false;
  company!: Company;
  insiderSentiments!: Array<InsiderSentimentData>;

  private loadedSubs = 0;
  private subs: Subscription[] = [];

  constructor(private finnhubService: FinnhubService) {

  }

  ngOnInit(): void {
    this.subs.push(this.finnhubService.getCompany(this.symbol).subscribe(value => {
      this.company = value;
      this.loaded = ++this.loadedSubs == this.subs.length;
    }));

    let current = new Date()
    let from = new Date(current.getFullYear(), current.getMonth() - 3, 1);
    let to = new Date(current.getFullYear(), current.getMonth() - 1, 1);

    this.subs.push(this.finnhubService.getInsideSentiment(this.symbol, from, to).subscribe(value => {
      this.insiderSentiments = value.data;
      this.loaded = ++this.loadedSubs == this.subs.length;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
