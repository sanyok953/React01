
let store = {
  _state: {
    navBar: {
      friends: [
        { id: 1, name: "Petr", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200"},
        { id: 2, name: "Ivan", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200"},
        { id: 3, name: "Svetlana", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200"},
        { id: 4, name: "Igor", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200"}
      ]
    },
    profilePage: {
      posts: [
        { id: 1, likesCount: 12, post: 'Hi How are you?' },
        { id: 2, likesCount: 22, post: 'I`m fine thank you and you' },
        { id: 3, likesCount: 32, post: 'I`m fine thank you and you' },
        { id: 4, likesCount: 42, post: 'I`m fine thank you and you' },
        { id: 5, likesCount: 52, post: 'I`m fine thank you and you' },
        { id: 6, likesCount: 62, post: 'I`m fine thank you and you' }
      ],
      newPostText: 'Start'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      dialogs: [
        { id: 1, name: 'Petr' },
        { id: 2, name: 'Maxim' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Svetlana' },
        { id: 5, name: 'Igor' }
      ]
    }
  },
  _callSubscriber(state) {
    console.log('State was changed', state)
  }, // Заглушка не делающая ничего

  subscribe (observer) {
    this._callSubscriber = observer // К заглушке присваиваем настоящую функцию, которая перерисует ui при обновлении данных
  },
  getState() {
    return this._state;
  },

  /*addPost() {
    let newPost = {
      id: 7,
      post: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },*/
  dispatch(action) {
    switch(action.type) {
      case 'ADD-POST':
        let newPost = {
          id: 7,
          post: this._state.profilePage.newPostText,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
        console.log(action, this._state.profilePage.newPostText)
        break
      case 'UPDATE-NEW-POST-TEXT':
        this._state.profilePage.newPostText = action.text
        this._callSubscriber(this._state)
        console.log(action)
        break
      default:
        console.log('no action')
        break
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    text: text
  }
}

export default store
window.store = store