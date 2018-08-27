import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesesComponent } from './syntheses.component';

describe('SynthesesComponent', () => {
  let component: SynthesesComponent;
  let fixture: ComponentFixture<SynthesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
