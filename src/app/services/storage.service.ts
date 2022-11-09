import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Company} from "../model/company-data";

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy {

  private storage: Company[] = [];

  private _storage$ = new BehaviorSubject<Company[]>([]);

  constructor() {
  }

  add(company: Company): void {
    this.storage.push(company);
    this._storage$.next(this.storage)
  }

  remove(symbol: string): void {
    console.log('Remove ' + symbol)

    let index = this.storage.findIndex(company => company.symbol == symbol);
    if (index > -1) {
      this.storage.splice(index, 1);
    }

    console.log(this.storage)
    this._storage$.next(this.storage)
  }

  get(): BehaviorSubject<Company[]> {
    return this._storage$;
  }

  ngOnDestroy(): void {
    this._storage$.complete();
  }
}
