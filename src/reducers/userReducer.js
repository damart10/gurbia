export default function(state={
    user: {
      id: null,
      name: null,
      email: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "USER_LOGIN_PENDING":
        return {...state, fetching: true};
      case "USER_LOGIN_REJECTED":
        return {...state, fetching: false, error: action.payload};
      case "USER_LOGIN_FULFILLED":
      return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        };
      case "USER_LOGIN_PENDING":
        return {...state, fetching: true};
      case "USER_LOGIN_REJECTED":
        return {...state, fetching: false, error: action.payload.message};
      case "USER_LOGIN_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        };
    }

    return state
}
