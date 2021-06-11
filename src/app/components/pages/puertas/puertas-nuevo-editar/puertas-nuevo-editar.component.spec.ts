import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasNuevoEditarComponent } from './puertas-nuevo-editar.component';

describe('PuertasNuevoEditarComponent', () => {
  let component: PuertasNuevoEditarComponent;
  let fixture: ComponentFixture<PuertasNuevoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertasNuevoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertasNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
