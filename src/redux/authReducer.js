import { AuthAPI } from "../api/api"

const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN'


let initialState = {
  auth: {
    userId: null,
    email: null,
    login: null,
    isAuth: false
  }
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_LOGIN:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_LOGIN, data: {userId, email, login}})

export const setAuth = () => {
  return dispatch => {
    AuthAPI.getAuthMe()
    .then(data => {
      if(data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login))
      }
    })
  }
}

export default authReducer