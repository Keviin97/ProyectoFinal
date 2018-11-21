import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolicitanteComponent } from './update-solicitante.component';

describe('UpdateSolicitanteComponent', () => {
  let component: UpdateSolicitanteComponent;
  let fixture: ComponentFixture<UpdateSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
