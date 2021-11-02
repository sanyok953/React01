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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  //let stateCopy

  switch (action.type) {
    
    case SEND_MESSAGE:
      let body = action.message //state.newMessageBody

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
    
    default:
      return state
  }
}

export const addMessage = message => ({
  type: SEND_MESSAGE,
  message
})

export default dialogsReducer