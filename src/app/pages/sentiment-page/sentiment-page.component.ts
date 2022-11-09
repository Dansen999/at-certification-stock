import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-sentiment-page',
  templateUrl: './sentiment-page.component.html',
  styleUrls: ['./sentiment-page.component.css']
})
export class SentimentPageComponent implements OnInit {

  _symbols$ = new BehaviorSubject<string[]>([]);

  constructor(private route: ActivatedRoute,
              private storageService: StorageService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this._symbols$.next([params['symbol']]);
    });
  }
}
