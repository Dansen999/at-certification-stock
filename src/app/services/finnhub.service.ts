import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, from, map, Observable} from "rxjs";
import {Company, InsiderSentimentResponse, QuoteResponse, SearchResponse} from "../model/company-data";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {

  private readonly token = { 'token': 'bu4f8kn48v6uehqi3cqg' };
  private readonly api = 'https://finnhub.io/api/v1';
  private readonly apiQuote = this.api + '/quote';
  private readonly apiSearch = this.api + '/search';
  private readonly apiSentiment = this.api + '/stock/insider-sentiment';


  constructor(private httpClient: HttpClient) { }

  searchSymbol(q: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(this.apiSearch, {params: { ...this.token, q }});
  }

  getCompany(symbol: string): Observable<Company> {
    return this.searchSymbol(symbol).pipe(map(value => {
      if (value.count > 0) {
        let company = value.result.find(company => company.symbol == symbol);
        if (company) {
          return company;
        } else {
          throw new Error('No unique result');
        }
      } else {
        throw new Error('No result');
      }
    }), catchError((err: Error, caught) => {
      throw new Error(err.message);
    }));
  }

  getQuote(symbol: string): Observable<QuoteResponse> {
    return this.httpClient.get<QuoteResponse>(this.apiQuote, {params: { ...this.token, symbol }});
  }

  getInsideSentiment(symbol: string, fromDate: Date, toDate: Date): Observable<InsiderSentimentResponse> {




    let from = formatDate(fromDate,'yyyy-MM-dd','en-US');
    let to = formatDate(toDate,'yyyy-MM-dd','en-US');

    return this.httpClient.get<InsiderSentimentResponse>(this.apiSentiment, {params: { ...this.token, symbol, from, to }});
  }
}


