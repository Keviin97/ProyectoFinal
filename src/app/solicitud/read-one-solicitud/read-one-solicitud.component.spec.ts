import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneSolicitudComponent } from './read-one-solicitud.component';

describe('ReadOneSolicitudComponent', () => {
  let component: ReadOneSolicitudComponent;
  let fixture: ComponentFixture<ReadOneSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
