import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCardComponent } from './stock-card.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('StockCardComponent', () => {
  let component: StockCardComponent;
  let fixture: ComponentFixture<StockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCardComponent ],
      imports: [
        HttpClientTestingModule
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
