import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasDetalleComponent } from './puertas-detalle.component';

describe('PuertasDetalleComponent', () => {
  let component: PuertasDetalleComponent;
  let fixture: ComponentFixture<PuertasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
