import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentPageComponent } from './sentiment-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppRoutingModule} from "../../app-routing.module";

describe('SentimentPageComponent', () => {
  let component: SentimentPageComponent;
  let fixture: ComponentFixture<SentimentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentPageComponent ],
      imports: [
        HttpClientTestingModule,
        AppRoutingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
