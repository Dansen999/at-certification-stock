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

  symbolInput = '';
  disabled = false;

  constructor(public finnhubService: FinnhubService,
              public storageService: StorageService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }


  addSymbol() {

    // start loading...
    this.disabled = true;
    this.finnhubService.getCompany(this.symbolInput).subscribe(value => {
      this.storageService.add(value.symbol);
      this.symbolInput = '';
      this.disabled = false;
    }, (error: string) => {
      this.snackBar.open(error, 'close', {duration: 10000});
      this.disabled = false;
    });
  }
}
