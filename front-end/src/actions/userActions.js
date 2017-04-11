import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.122.1:3000/api/user';

export function userLogin(email, password) {
  return (dispatch) => {
    axios.post('/', { email, password })
      .then((response) => {
        dispatch({
          type: 'USER_LOGIN_FULFILLED',
          payload: response
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

export function userAdd(email, password, firstname, lastname) {
  return (dispatch) => {
    axios.post('/', {email, password, firstname, lastname})
      .then((response) => {
        dispatch({
          type: 'USER_REGISTER_FULFILLED',
          payload: response
        })
      })
      .catch((error) => {
        dispatch({
          type: 'USER_REGISTER_REJECTED',
          payload: error
        })
      })
  }
}