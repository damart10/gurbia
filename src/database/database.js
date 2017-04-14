import * as firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'
import {Platform} from 'react-native'

export default class Database {

  constructor(){
    var zelda = ''
  }

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

  static uploadImage(uri, mime = 'application/octet-stream'){
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Date().getTime()
        let uploadBlob = null
        const imageRef = firebase.storage().ref('Food').child(`${sessionId}`)

        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          this.zelda = url
          console.log('Mi URL es: ', this.zelda)
          return url
        })
        .catch((error) => {
          reject(error)
        })
    })
}

  static writePost(picture, title, description, location, portions, price) {
    this.uploadImage(picture)

    var user = firebase.auth().currentUser;
    var newPostKey = firebase.database().ref().child('posts').push().key;
    var postData = {
      uid:             user.uid,
      postPic:         this.zelda,
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
