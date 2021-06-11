import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionesListadoComponent } from './contrataciones-listado.component';

describe('ContratacionesListadoComponent', () => {
  let component: ContratacionesListadoComponent;
  let fixture: ComponentFixture<ContratacionesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacionesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
