import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasContenedorComponent } from './puertas-contenedor.component';

describe('PuertasContenedorComponent', () => {
  let component: PuertasContenedorComponent;
  let fixture: ComponentFixture<PuertasContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertasContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertasContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
