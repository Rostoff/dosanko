import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyListPersonnalComponent } from './society-list-personnal.component';

describe('SocietyListPersonnalComponent', () => {
  let component: SocietyListPersonnalComponent;
  let fixture: ComponentFixture<SocietyListPersonnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyListPersonnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyListPersonnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
