import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSolicitanteComponent } from './read-solicitante.component';

describe('ReadSolicitanteComponent', () => {
  let component: ReadSolicitanteComponent;
  let fixture: ComponentFixture<ReadSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
