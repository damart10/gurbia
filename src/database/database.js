import * as firebase from 'firebase'

export default class Database {

  static createUser(firstname, lastname, email, password) {
    try{
      firebase.auth().createUserWithEmailAndPassword(email, password);

      console.log('Success');
    } catch(error) {
      console.error(error);
    }
  }

  static loginUser(email, password) {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch(error) {
      console.error(error);
    }
  }
}