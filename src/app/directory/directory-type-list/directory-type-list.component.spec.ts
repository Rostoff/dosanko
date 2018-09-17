import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryTypeListComponent } from './directory-type-list.component';

describe('DirectoryTypeListComponent', () => {
  let component: DirectoryTypeListComponent;
  let fixture: ComponentFixture<DirectoryTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
