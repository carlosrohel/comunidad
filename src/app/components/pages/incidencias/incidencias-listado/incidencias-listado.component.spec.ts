import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasListadoComponent } from './incidencias-listado.component';

describe('IncidenciasListadoComponent', () => {
  let component: IncidenciasListadoComponent;
  let fixture: ComponentFixture<IncidenciasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
