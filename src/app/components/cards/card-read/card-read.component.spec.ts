import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadComponent } from './card-read.component';

describe('CardReadComponent', () => {
  let component: CardReadComponent;
  let fixture: ComponentFixture<CardReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardReadComponent]
    });
    fixture = TestBed.createComponent(CardReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
