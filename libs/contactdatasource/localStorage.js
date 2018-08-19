class LocalStorageManager {
  constructor(){

  }
  /*
  * create new client side local store object, will create empty if no object exists
  */
  createStore(name){
    if(!localStorage[name]){
      const data = {
        contacts: []
      }
      localStorage[name]=JSON.stringify(data);
    }
    //returning promise to make it async, because in real life it will probably use async operations
    return new Promise((resolve, reject) => {
      if (localStorage[name]){
        resolve(JSON.parse(localStorage[name]));
      }else{
        reject('Unexpected error');
      }
    })
  }
}

export default LocalStorageManager;