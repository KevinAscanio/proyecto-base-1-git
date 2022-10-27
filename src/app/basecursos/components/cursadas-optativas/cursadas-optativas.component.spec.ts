import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursadasOptativasComponent } from './cursadas-optativas.component';

describe('CursadasOptativasComponent', () => {
  let component: CursadasOptativasComponent;
  let fixture: ComponentFixture<CursadasOptativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursadasOptativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursadasOptativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
