import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComContenedorComponent } from './doc-com-contenedor.component';

describe('DocComContenedorComponent', () => {
  let component: DocComContenedorComponent;
  let fixture: ComponentFixture<DocComContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocComContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocComContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
