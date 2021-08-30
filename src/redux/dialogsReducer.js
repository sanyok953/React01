const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      if(body === '') {
        console.log('Message is empty')
        return state
      }
      let mess = {
        id: state.messages.length,
        send: true,
        message: body
      }
      state.newMessageBody = ''
      state.messages.push(mess)
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE }) // 

export const updateNewMessageActionCreator = body => ({ // Изменение поля ввода в Dialogs
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export default dialogsReducer