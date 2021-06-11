import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasDetalleComponent } from './cuentas-detalle.component';

describe('CuentasDetalleComponent', () => {
  let component: CuentasDetalleComponent;
  let fixture: ComponentFixture<CuentasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
