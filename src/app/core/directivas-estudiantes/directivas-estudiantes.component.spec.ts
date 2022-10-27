import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasEstudiantesComponent } from './directivas-estudiantes.component';

describe('DirectivasEstudiantesComponent', () => {
  let component: DirectivasEstudiantesComponent;
  let fixture: ComponentFixture<DirectivasEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
