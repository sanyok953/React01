const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  newPostText: 'Start'
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts,
          {
            id: state.posts.length, // next index from count elements
            post: state.newPostText,
            likesCount: 0
          }
        ],
        newPostText: ''
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
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text
      }
      /*let stateCopy = {...state}
      stateCopy.newPostText = action.text
      return stateCopy*/
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
export const addPost = () => ({
  type: ADD_POST
}) // Сохранение нового поста в state.profilePage из MyPosts

export const updateNewPost = text => ({ // Изменение поля ввода в MyPosts
  type: UPDATE_NEW_POST_TEXT,
  text
})

export const setUserProfile = profile => ({ // Информация о пользователе
  type: SET_USER_PROFILE,
  profile
})

export default profileReducer