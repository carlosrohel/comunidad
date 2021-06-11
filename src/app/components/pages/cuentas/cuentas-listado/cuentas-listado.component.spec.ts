import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasListadoComponent } from './cuentas-listado.component';

describe('CuentasListadoComponent', () => {
  let component: CuentasListadoComponent;
  let fixture: ComponentFixture<CuentasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
