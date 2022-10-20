import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedMethods } from './shared-methods.service';
import { SharedVar } from './shared-var.service';

describe('SharedMethodsService', () => {
  let service: SharedMethods;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        SharedVar
      ]
    });
    service = TestBed.inject(SharedMethods);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
