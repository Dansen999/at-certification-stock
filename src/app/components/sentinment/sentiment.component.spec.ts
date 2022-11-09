import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentComponent } from './sentiment.component';

describe('SentinmentComponent', () => {
  let component: SentimentComponent;
  let fixture: ComponentFixture<SentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentComponent ]
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