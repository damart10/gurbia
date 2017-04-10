import axios from 'axios'

const url = 'http://localhost:3000/api/user'

export function userLogin(email, password) {
  return dispatch => {
    axios.post(url, { email, password })
      .then((response) => {
        dispatch({
          type: 'USER_LOGIN_FULFILLED',
          payload: res
        })
      })
      .catch((error) => {
        dispatch({
          type: 'USER_LOGIN_REJECTED',
          payload: error
        })
      })
  }
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