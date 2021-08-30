const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length, // next index from count elements
        post: state.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost)
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text
      return state
    default:
      return state
  }
}

// ActionCreators
export const addPostActionCreator = () => ({ type: ADD_POST }) // Сохранение нового поста в state.profilePage из MyPosts

export const updateNewPostActionCreator = text => ({ // Изменение поля ввода в MyPosts
  type: UPDATE_NEW_POST_TEXT,
  text: text
})

export default profileReducer