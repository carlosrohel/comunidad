import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasNuevoEditarComponent } from './cuentas-nuevo-editar.component';

describe('CuentasNuevoEditarComponent', () => {
  let component: CuentasNuevoEditarComponent;
  let fixture: ComponentFixture<CuentasNuevoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasNuevoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
