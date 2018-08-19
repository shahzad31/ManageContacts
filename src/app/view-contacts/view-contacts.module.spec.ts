import { ViewContactsModule } from './view-contacts.module';

describe('ViewContactsModule', () => {
  let viewContactsModule: ViewContactsModule;

  beforeEach(() => {
    viewContactsModule = new ViewContactsModule();
  });

  it('should create an instance', () => {
    expect(viewContactsModule).toBeTruthy();
  });
});
