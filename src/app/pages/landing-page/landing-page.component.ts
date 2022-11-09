import {Component, OnInit} from '@angular/core';
import {FinnhubService} from "../../services/finnhub.service";
import {StorageService} from "../../services/storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  symbol = '';
  disabled = false;

  constructor(public finnhubService: FinnhubService,
              public storageService: StorageService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }


  addSymbol() {
    console.log('search for ' + this.symbol)

    // start loading...
    this.disabled = true;
    this.finnhubService.searchSymbol(this.symbol).subscribe(value => {

      if (value.count > 0) {

        let company = value.result.find(company => company.symbol == this.symbol);
        if (company) {
          this.storageService.add(company);
          this.symbol = '';
        } else {
          this.snackBar.open('No unique result', 'close', {duration: 10000});
        }

        this.disabled = false
      } else {
        this.snackBar.open('No result', 'close', {duration: 10000});
        this.disabled = false
      }
    }, (error) => {
      this.snackBar.open('Communication error', 'close', {duration: 10000});
    });
  }
}
