import { TestBed } from '@angular/core/testing';

import { ListaplantasService } from './listaplantas.service';

describe('ListaplantasService', () => {
  let service: ListaplantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaplantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
