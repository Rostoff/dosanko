import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModelsComponent } from './forms-models.component';

describe('FormsModelsComponent', () => {
  let component: FormsModelsComponent;
  let fixture: ComponentFixture<FormsModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
