import { ProfileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    { id: 0, likesCount: 12, post: 'Hi How are you?' },
    { id: 1, likesCount: 22, post: 'I`m fine thank you and you' },
    { id: 2, likesCount: 32, post: 'I`m fine thank you and you' },
    { id: 3, likesCount: 42, post: 'I`m fine thank you and you' },
    { id: 4, likesCount: 52, post: 'I`m fine thank you and you' },
    { id: 5, likesCount: 62, post: 'I`m fine thank you and you' }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts,
          {
            id: state.posts.length, // next index from count elements
            post: action.title,
            likesCount: 0
          }
        ]
      }
      /*let newPost = {
        id: state.posts.length, // next index from count elements
        post: state.newPostText,
        likesCount: 0
      }
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy*/
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}

// ActionCreators
export const addPost = title => ({
  type: ADD_POST,
  title
}) // Сохранение нового поста в state.profilePage из MyPosts

const setStatus = status => ({ // Изменение статуса
  type: SET_STATUS,
  status
})

const setUserProfile = profile => ({ // Информация о пользователе
  type: SET_USER_PROFILE,
  profile
})

// Thunks

export const getStatus = userId => {
  return dispatch => {
    ProfileAPI.getStatus(userId) // Получение статуса с сервера
    .then(data => {
      if(data.status === 200)
        dispatch(setStatus(data.data)) // Запись полученного статуса в state
    })
  }
}

export const updateStatus = status => {
  return dispatch => {
    ProfileAPI.updateStatus(status) // Обновление статуса на сервере
    .then(response => {
      if(response.data.resultCode === 0)
        dispatch(setStatus(status)) // Если обновлён то заносим в state
    })
  }
}

export const getUserProfile = userId => {
  return dispatch => {
		ProfileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data))
      /*this.props.setTotalUsersCount(response.data.totalCount)
      this.props.setFetching(false)*/
    })
  }
}

export default profileReducer