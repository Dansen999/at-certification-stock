import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentComponent } from './sentiment.component';
import {MonthPipe} from "../../pipes/month.pipe";
import {TendencyComponent} from "../tendency/tendency.component";
import {ActivatedRoute, RouterModule} from "@angular/router";

describe('SentinmentComponent', () => {
  let component: SentimentComponent;
  let fixture: ComponentFixture<SentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentComponent, MonthPipe, TendencyComponent ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
