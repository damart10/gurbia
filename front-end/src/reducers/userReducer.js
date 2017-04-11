export default function(state={
    user: {
      firstname: null,
      lastname: null,
      email: null,
      id: null
    },
    fetched: false,
    error: false,
    errorMessage: null,
  }, action) {

    switch (action.type) {
      case "USER_LOGIN_REJECTED":
        return {
          ...state,
          error: action.payload.error ,
          errorMessage: action.payload.message
        };
      case "USER_LOGIN_FULFILLED":
      return {
          ...state,
          fetched: true,
          user: action.payload,
        };
    }

    return state
}
