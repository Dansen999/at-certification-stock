import { Component, OnInit } from '@angular/core';
import {FinnhubService} from "../../services/finnhub.service";

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  constructor(private finnhubService: FinnhubService) { }

  ngOnInit(): void {
  }

}
