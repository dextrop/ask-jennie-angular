import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScrapperComponent } from './web-scrapper.component';

describe('WebScrapperComponent', () => {
  let component: WebScrapperComponent;
  let fixture: ComponentFixture<WebScrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebScrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebScrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
