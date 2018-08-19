import LocalStorageManager from './localStorage';
const localStorageManager = null;
export default createDataSource = (name='contacts', sourceType='localStorage') => {
  switch(sourceType){
    default:
      if (localStorageManager){
        return localStorageManager;
      }
      return new LocalStorageManager();
  }
}