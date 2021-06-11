import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosListadoComponent } from './comentarios-listado.component';

describe('ComentariosListadoComponent', () => {
  let component: ComentariosListadoComponent;
  let fixture: ComponentFixture<ComentariosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
