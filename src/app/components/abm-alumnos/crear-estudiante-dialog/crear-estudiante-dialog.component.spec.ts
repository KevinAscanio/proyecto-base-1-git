import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstudianteDialogComponent } from './crear-estudiante-dialog.component';

describe('CrearEstudianteDialogComponent', () => {
  let component: CrearEstudianteDialogComponent;
  let fixture: ComponentFixture<CrearEstudianteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstudianteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEstudianteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
