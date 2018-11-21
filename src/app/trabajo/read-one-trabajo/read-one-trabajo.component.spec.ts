import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneTrabajoComponent } from './read-one-trabajo.component';

describe('ReadOneTrabajoComponent', () => {
  let component: ReadOneTrabajoComponent;
  let fixture: ComponentFixture<ReadOneTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
