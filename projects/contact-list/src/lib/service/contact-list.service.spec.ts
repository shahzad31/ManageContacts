import { TestBed, inject, tick, fakeAsync, async } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';

describe('ContactListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactListService]
    });
  });

  it('should be created', inject([ContactListService], (service: ContactListService) => {
    expect(service).toBeTruthy();
  }));

  it('data source should be there', inject([ContactListService], (service: ContactListService) => {
    expect(service.dataSource).toBeTruthy();
  }));

  it('store should be there', inject([ContactListService], (service: ContactListService) => {
    expect(service.store).toBeTruthy();
  }));

  it('add should return promise', inject([ContactListService], (service: ContactListService) => {
    const promise = service.add({ name: 'test' });
    expect(promise instanceof Promise).toBeTruthy();
  }));

  it('get a list of contacts', (done) => {
    inject([ContactListService], (service: ContactListService) => {
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
