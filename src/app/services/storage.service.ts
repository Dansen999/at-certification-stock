import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy {

  private storage: string[] = [];
  private _storage$ = new BehaviorSubject<string[]>([]);

  constructor() {
  }

  add(symbol: string): void {
    this.storage.push(symbol);
    this._storage$.next(this.storage)
  }

  remove(symbol: string): void {
    console.log('Remove ' + symbol)

    let index = this.storage.findIndex(item => item == symbol);
    if (index > -1) {
      this.storage.splice(index, 1);
    }

    console.log(this.storage)
    this._storage$.next(this.storage)
  }

  get(): BehaviorSubject<string[]> {
    return this._storage$;
  }

  ngOnDestroy(): void {
    this._storage$.complete();
  }
}
