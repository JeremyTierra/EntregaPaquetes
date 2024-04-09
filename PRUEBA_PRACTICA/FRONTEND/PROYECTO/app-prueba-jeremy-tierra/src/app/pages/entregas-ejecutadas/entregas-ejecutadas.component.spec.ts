import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasEjecutadasComponent } from './entregas-ejecutadas.component';

describe('EntregasEjecutadasComponent', () => {
  let component: EntregasEjecutadasComponent;
  let fixture: ComponentFixture<EntregasEjecutadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregasEjecutadasComponent]
    });
    fixture = TestBed.createComponent(EntregasEjecutadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
