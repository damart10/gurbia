import * as firebase from 'firebase'

export default class Database {

  static createUser(firstname, lastname, email, password) {
    try{
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          firebase.database().ref('users/' + res.uid).set({
            username: (firstname + ' ' + lastname),
            email
          });
        });
      console.log('Success');
    } catch(error) {
      console.error(error);
    }
  }

  static loginUser(email, password) {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password);
      var user = firebase.auth().currentUser;
      console.log(user  );
    } catch(error) {
      console.error(error);
    }
  }

  static writePost(picture, title, description, location, portions, price) {
    var user = firebase.auth().currentUser;
    var newPostKey = firebase.database().ref().child('posts').push().key;
    var postData = {
      uid:             user.uid,
      postPic:         picture,
      postTitle:       title,
      postDescription: description,
      postLocation:    location,
      postPortions:    portions,
      postPrice:       price
    };

    var updates = {};
    updates['posts/' + newPostKey] = postData;
    updates['user-posts/' + user.uid + '/' + newPostKey] = postData;
    
    firebase.database().ref().update(updates);
  }
}
