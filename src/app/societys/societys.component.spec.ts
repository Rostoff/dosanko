import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietysComponent } from './societys.component';

describe('SocietysComponent', () => {
  let component: SocietysComponent;
  let fixture: ComponentFixture<SocietysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
