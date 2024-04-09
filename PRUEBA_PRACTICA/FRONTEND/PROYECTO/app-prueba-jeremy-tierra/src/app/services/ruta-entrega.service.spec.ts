import { TestBed } from '@angular/core/testing';

import { RutaEntregaService } from './ruta-entrega.service';

describe('RutaEntregaService', () => {
  let service: RutaEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutaEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
