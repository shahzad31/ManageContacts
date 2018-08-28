import { TestBed, inject } from '@angular/core/testing';

import { ContactAddEditService } from './contact-add-edit.service';

describe('ContactAddEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactAddEditService]
    });
  });

  it('should be created', inject([ContactAddEditService], (service: ContactAddEditService) => {
    expect(service).toBeTruthy();
  }));
});
