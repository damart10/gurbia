import Firebase from 'firebase'

const db = new Firebase('https://gurbia-1330f.firebaseio.com/');

export function getUser() {
  return dispatch => {
    db.on('value', snapshot => {
      dispatch({
        type: 'GET_USER',
        payload: snapshot.val()
      });
    });
  };return {
    type: 'GET_USER',
    payload: data
  }
}

export function addUser(data) {
  return dispatch => db.push(data);
}

export function deleteUser(key) {
  return dispatch => db.child(key).remove();
}