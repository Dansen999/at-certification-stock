import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  @Input()
  month!: number;

  @Input()
  change!: number;

  @Input()
  mspr!: number;


  constructor() { }

  ngOnInit(): void {

  }
}
