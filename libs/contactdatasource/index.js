import LocalStorageManager from './localStorage';
const localStorageManager = null;
const CreateDataSource = (name='contacts', sourceType='localStorage') => {
  switch(sourceType){
    default:
      if (localStorageManager){
        return localStorageManager;
      }
      return new LocalStorageManager();
  }
}
export default CreateDataSource;