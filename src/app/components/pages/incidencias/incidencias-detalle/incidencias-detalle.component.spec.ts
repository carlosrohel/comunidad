import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasDetalleComponent } from './incidencias-detalle.component';

describe('IncidenciasDetalleComponent', () => {
  let component: IncidenciasDetalleComponent;
  let fixture: ComponentFixture<IncidenciasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
