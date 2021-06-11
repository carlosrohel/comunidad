import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionesDetalleComponent } from './contrataciones-detalle.component';

describe('ContratacionesDetalleComponent', () => {
  let component: ContratacionesDetalleComponent;
  let fixture: ComponentFixture<ContratacionesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacionesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
