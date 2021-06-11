import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasContenedorComponent } from './incidencias-contenedor.component';

describe('IncidenciasContenedorComponent', () => {
  let component: IncidenciasContenedorComponent;
  let fixture: ComponentFixture<IncidenciasContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
