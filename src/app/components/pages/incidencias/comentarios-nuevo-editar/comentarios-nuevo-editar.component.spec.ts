import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosNuevoEditarComponent } from './comentarios-nuevo-editar.component';

describe('ComentariosNuevoEditarComponent', () => {
  let component: ComentariosNuevoEditarComponent;
  let fixture: ComponentFixture<ComentariosNuevoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosNuevoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
