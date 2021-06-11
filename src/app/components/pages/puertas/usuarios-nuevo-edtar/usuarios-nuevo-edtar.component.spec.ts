import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosNuevoEdtarComponent } from './usuarios-nuevo-edtar.component';

describe('UsuariosNuevoEdtarComponent', () => {
  let component: UsuariosNuevoEdtarComponent;
  let fixture: ComponentFixture<UsuariosNuevoEdtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosNuevoEdtarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosNuevoEdtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
