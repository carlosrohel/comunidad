import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionesNuevoEditarComponent } from './contrataciones-nuevo-editar.component';

describe('ContratacionesNuevoEditarComponent', () => {
  let component: ContratacionesNuevoEditarComponent;
  let fixture: ComponentFixture<ContratacionesNuevoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacionesNuevoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacionesNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
