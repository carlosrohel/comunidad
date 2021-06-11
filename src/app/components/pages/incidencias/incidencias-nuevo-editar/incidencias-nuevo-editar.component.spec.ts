import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasNuevoEditarComponent } from './incidencias-nuevo-editar.component';

describe('IncidenciasNuevoEditarComponent', () => {
  let component: IncidenciasNuevoEditarComponent;
  let fixture: ComponentFixture<IncidenciasNuevoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasNuevoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
