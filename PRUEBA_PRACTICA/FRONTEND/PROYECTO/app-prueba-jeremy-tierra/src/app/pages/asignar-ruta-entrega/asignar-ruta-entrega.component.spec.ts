import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRutaEntregaComponent } from './asignar-ruta-entrega.component';

describe('AsignarRutaEntregaComponent', () => {
  let component: AsignarRutaEntregaComponent;
  let fixture: ComponentFixture<AsignarRutaEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarRutaEntregaComponent]
    });
    fixture = TestBed.createComponent(AsignarRutaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
