import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSolicitudComponent } from './read-solicitud.component';

describe('ReadSolicitudComponent', () => {
  let component: ReadSolicitudComponent;
  let fixture: ComponentFixture<ReadSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
