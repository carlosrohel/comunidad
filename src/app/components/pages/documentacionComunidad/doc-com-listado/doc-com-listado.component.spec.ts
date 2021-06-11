import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComListadoComponent } from './doc-com-listado.component';

describe('DocComListadoComponent', () => {
  let component: DocComListadoComponent;
  let fixture: ComponentFixture<DocComListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocComListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocComListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
