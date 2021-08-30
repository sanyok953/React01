import dialogsReducer from "./dialogsReducer"
import navReducer from "./navReducer"
import profileReducer from "./profileReducer"

let store = {
  _state: {
    navBar: {
      friends: [
        { id: 0, name: "Petr", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200" },
        { id: 1, name: "Ivan", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200" },
        { id: 2, name: "Svetlana", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200" },
        { id: 3, name: "Igor", img: "https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200" }
      ]
    },
    profilePage: {
      posts: [
        { id: 0, likesCount: 12, post: 'Hi How are you?' },
        { id: 1, likesCount: 22, post: 'I`m fine thank you and you' },
        { id: 2, likesCount: 32, post: 'I`m fine thank you and you' },
        { id: 3, likesCount: 42, post: 'I`m fine thank you and you' },
        { id: 4, likesCount: 52, post: 'I`m fine thank you and you' },
        { id: 5, likesCount: 62, post: 'I`m fine thank you and you' }
      ],
      newPostText: 'Start'
    },
    dialogsPage: {
      messages: [
        { id: 0, send: false, message: 'Hi' },
        { id: 1, send: false, message: 'How are you?' },
        { id: 2, send: false, message: 'Yo' },
        { id: 3, send: true, message: 'Yo' },
        { id: 4, send: true, message: 'Yo' }
      ],
      dialogs: [
        { id: 0, name: 'Petr' },
        { id: 1, name: 'Maxim' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Igor' }
      ],
      newMessageBody: 'Hello'
    }
  },
  _callSubscriber(state) {
    console.log('State was changed', state)
  }, // Заглушка не делающая ничего

  subscribe(observer) {
    this._callSubscriber = observer // К заглушке присваиваем настоящую функцию, которая перерисует ui при обновлении данных
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navBar = navReducer(this._state.navBar, action)
    this._callSubscriber(this._state)
  }
}

export default store
window.store = store