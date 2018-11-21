import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolicitanteComponent } from './create-solicitante.component';

describe('CreateSolicitanteComponent', () => {
  let component: CreateSolicitanteComponent;
  let fixture: ComponentFixture<CreateSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
