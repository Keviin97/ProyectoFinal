import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneSolicitanteComponent } from './read-one-solicitante.component';

describe('ReadOneSolicitanteComponent', () => {
  let component: ReadOneSolicitanteComponent;
  let fixture: ComponentFixture<ReadOneSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
