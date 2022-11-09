import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentCardComponent } from './sentiment-card.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SentimentCardComponent', () => {
  let component: SentimentCardComponent;
  let fixture: ComponentFixture<SentimentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentCardComponent ],
      imports: [
        HttpClientTestingModule
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
