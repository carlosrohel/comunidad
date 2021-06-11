import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasContenedorComponent } from './cuentas-contenedor.component';

describe('CuentasContenedorComponent', () => {
  let component: CuentasContenedorComponent;
  let fixture: ComponentFixture<CuentasContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
