import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTrabajoComponent } from './read-trabajo.component';

describe('ReadTrabajoComponent', () => {
  let component: ReadTrabajoComponent;
  let fixture: ComponentFixture<ReadTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
