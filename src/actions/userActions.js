import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6hLC91vjHm5rAgV5ootxr4-Uv1P2N_4E",
  authDomain: "gurbia-1330f.firebaseapp.com"
})

export function userLogin({ email, password }) {
  app.auth().signInWithEmailAndPassword(email, password)
  .then( (res) => {
    dispatch({
      type: 'USER_LOGIN_FULFILLED',
      payload: res,
    })
  }).catch( (error) => {
    dispatch({
      type: 'USER_LOGIN_REJECTED',
      payload: error,
    })
  })
}

export function userAdd({ email, password }) {
  app.auth().createUserWithEmailAndPassword(email, password)
  .then( (res) => {
    dispatch({
      type: 'USER_CREATE_FULFILLED',
      payload: res,
    })
  }).catch( (error) => {
    dispatch({
      type: 'USER_CREATE_REJECTED',
      payload: error,
    })
  })
}