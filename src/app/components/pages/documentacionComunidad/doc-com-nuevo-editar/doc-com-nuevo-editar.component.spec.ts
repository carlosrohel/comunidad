import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComNuevoEditarComponent } from './doc-com-nuevo-editar.component';

describe('DocComNuevoEditarComponent', () => {
  let component: DocComNuevoEditarComponent;
  let fixture: ComponentFixture<DocComNuevoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocComNuevoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocComNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
