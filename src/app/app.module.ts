import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SentimentPageComponent} from './pages/sentiment-page/sentiment-page.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {StockCardComponent} from './components/stock-card/stock-card.component';
import {MatIconModule} from "@angular/material/icon";
import {SentimentCardComponent} from './components/sentiment-card/sentiment-card.component';
import {TendencyComponent} from './components/tendency/tendency.component';
import {SentimentComponent} from './components/sentinment/sentiment.component';
import { MonthPipe } from './pipes/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentimentPageComponent,
    LandingPageComponent,
    StockCardComponent,
    SentimentCardComponent,
    TendencyComponent,
    SentimentComponent,
    MonthPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
