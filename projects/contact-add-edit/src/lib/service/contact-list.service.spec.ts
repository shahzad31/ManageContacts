import { TestBed, inject } from '@angular/core/testing';

import { ContactAddEditService } from './contact-list.service';

describe('ContactAddEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactAddEditService]
    });
  });

  it('should be created', inject([ContactAddEditService], (service: ContactAddEditService) => {
    expect(service).toBeTruthy();
  }));

  it('data source should be there', inject([ContactAddEditService], (service: ContactAddEditService) => {
    expect(service.dataSource).toBeTruthy();
  }));

  it('store should be there', inject([ContactAddEditService], (service: ContactAddEditService) => {
    expect(service.store).toBeTruthy();
  }));

  it('add should return promise', inject([ContactAddEditService], (service: ContactAddEditService) => {
    const promise = service.add({ name: 'test' });
    expect(promise instanceof Promise).toBeTruthy();
  }));

  it('get a list of contacts', (done) => {
    inject([ContactAddEditService], (service: ContactAddEditService) => {
      let contacts = null;
      const promise = service.store.then(result => {
        contacts = result.contacts;
        expect(contacts).toBeTruthy();
        done();
      });
    })();
  }
  );
});
