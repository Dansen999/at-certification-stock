import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuoteResponse, SearchResponse} from "../model/company-data";

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {

  private readonly token = { 'token': 'bu4f8kn48v6uehqi3cqg' };
  private readonly api = 'https://finnhub.io/api/v1';
  private readonly apiQuote = this.api + '/quote';
  private readonly apiSearch = this.api + '/search';



  constructor(private httpClient: HttpClient) { }

  searchSymbol(q: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(this.apiSearch, {params: { ...this.token, q }});
  }

  getQuote(symbol: string) {
    return this.httpClient.get<QuoteResponse>(this.apiQuote, {params: { ...this.token, symbol }});
  }
}


