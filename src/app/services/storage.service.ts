import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy {

  private readonly storageKey = 'symbols'
  private _storage$ = new BehaviorSubject<string[]>([]);

  constructor() {
  }

  private getSymbols(): string[] {
    try {
      const symbols = JSON.parse(localStorage.getItem(this.storageKey) || '');
      if (Array.isArray(symbols)) {
        return symbols;
      }
    } catch (e) {
      console.log("Failed reading symbols.")
    }
    localStorage.setItem(this.storageKey, '[]');
    return [];
  }

  private storeSymbols(symbols: string[]): void {
      localStorage.setItem(this.storageKey, JSON.stringify(symbols));
  }

  add(symbol: string): void {
    const symbols = this.getSymbols();
    symbols.push(symbol);
    this.storeSymbols(symbols);
    this._storage$.next(symbols);
  }

  remove(symbol: string): void {
    const symbols = this.getSymbols();

    let index = symbols.findIndex(item => item == symbol);
    if (index > -1) {
      symbols.splice(index, 1);
    }
    this.storeSymbols(symbols);
    this._storage$.next(symbols)
  }

  get(): BehaviorSubject<string[]> {
    if (this._storage$.value.length === 0) {
      this._storage$.next(this.getSymbols());
    }
    return this._storage$;
  }

  ngOnDestroy(): void {
    this._storage$.complete();
  }
}
