import { AddEditContactsModule } from './add-edit-contacts.module';

describe('AddEditContactsModule', () => {
  let addEditContactsModule: AddEditContactsModule;

  beforeEach(() => {
    addEditContactsModule = new AddEditContactsModule();
  });

  it('should create an instance', () => {
    expect(addEditContactsModule).toBeTruthy();
  });
});
