import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPaqueteComponent } from './registrar-paquete.component';

describe('RegistrarPaqueteComponent', () => {
  let component: RegistrarPaqueteComponent;
  let fixture: ComponentFixture<RegistrarPaqueteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPaqueteComponent]
    });
    fixture = TestBed.createComponent(RegistrarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
