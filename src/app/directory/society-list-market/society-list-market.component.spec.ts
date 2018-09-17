import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyListMarketComponent } from './society-list-market.component';

describe('SocietyListMarketComponent', () => {
  let component: SocietyListMarketComponent;
  let fixture: ComponentFixture<SocietyListMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyListMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyListMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
