const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

  //let stateCopy

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
      // stateCopy.newMessageBody = action.body // Можно и так присвоить значение как при копировании выше
      //return stateCopy
    
    case SEND_MESSAGE:
      let body = state.newMessageBody

      if (body === '') {
        console.log('Message is empty')
        return state
      }

      return {
        ...state,
        newMessageBody: '',
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            send: true,
            message: body
          }
        ] // Если в Dialogs передаём сразу dialogsPage тогда это не копируем
      }
      //let body = stateCopy.newMessageBody
      /*if (body === '') {
        console.log('Message is empty')
        return state
      }*/
      /*let mess = {
        id: stateCopy.messages.length,
        send: true,
        message: body
      }
      stateCopy.newMessageBody = ''
      stateCopy.messages.push(mess)
      return stateCopy*/
    
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