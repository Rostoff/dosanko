import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietySearchComponent } from './society-search.component';

describe('SocietySearchComponent', () => {
  let component: SocietySearchComponent;
  let fixture: ComponentFixture<SocietySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
