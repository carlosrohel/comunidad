import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionesContenedorComponent } from './contrataciones-contenedor.component';

describe('ContratacionesContenedorComponent', () => {
  let component: ContratacionesContenedorComponent;
  let fixture: ComponentFixture<ContratacionesContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacionesContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacionesContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
