import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tendency',
  templateUrl: './tendency.component.html',
  styleUrls: ['./tendency.component.css']
})
export class TendencyComponent implements OnInit {

  @Input()
  value!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
