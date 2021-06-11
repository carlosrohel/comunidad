import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComDetalleComponent } from './doc-com-detalle.component';

describe('DocComDetalleComponent', () => {
  let component: DocComDetalleComponent;
  let fixture: ComponentFixture<DocComDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocComDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocComDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
