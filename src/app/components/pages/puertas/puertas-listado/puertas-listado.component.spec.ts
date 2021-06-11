import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasListadoComponent } from './puertas-listado.component';

describe('PuertasListadoComponent', () => {
  let component: PuertasListadoComponent;
  let fixture: ComponentFixture<PuertasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
