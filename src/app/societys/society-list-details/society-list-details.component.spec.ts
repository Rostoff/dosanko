import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyListDetailsComponent } from './society-list-details.component';

describe('SocietyListDetailsComponent', () => {
  let component: SocietyListDetailsComponent;
  let fixture: ComponentFixture<SocietyListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
