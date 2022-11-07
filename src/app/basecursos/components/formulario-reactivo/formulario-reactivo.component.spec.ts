import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoComponent } from './formulario-reactivo.component';

describe('FormularioReactivoComponent', () => {
  let component: FormularioReactivoComponent;
  let fixture: ComponentFixture<FormularioReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioReactivoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea componente', () => {
    expect(component).toBeTruthy();
  });
  it('El formulario se mantiene invalido cuando ingreso unicamente el nombre del curso', () => {
    const formulario = component.formularioEstudiante;
    const nombre = formulario.controls['nombre'];

    nombre.setValue('Kevin');

    expect(formulario.valid).toBeFalse();
  });
});
