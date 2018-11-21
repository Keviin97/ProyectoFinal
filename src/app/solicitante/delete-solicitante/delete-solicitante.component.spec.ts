import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSolicitanteComponent } from './delete-solicitante.component';

describe('DeleteSolicitanteComponent', () => {
  let component: DeleteSolicitanteComponent;
  let fixture: ComponentFixture<DeleteSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
