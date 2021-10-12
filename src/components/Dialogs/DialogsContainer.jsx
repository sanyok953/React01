import { connect } from 'react-redux'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

/*const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{store => {

				let state = store.getState().dialogsPage

				let onAddMessage = () => {
					store.dispatch(addMessageActionCreator())
				}

				let onMessageChange = body => {
					store.dispatch(updateNewMessageActionCreator(body))
				}

				return (
					<Dialogs messageChange={onMessageChange} addMessage={onAddMessage} dialogs={state.dialogs} messages={state.messages} newMessageBody={state.newMessageBody} />
				)
			}
		}
		</StoreContext.Consumer>
	)
}*/

let mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageBody: state.dialogsPage.newMessageBody
	}
}

let mapDispatchToProps = dispatch => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator())
		},
		messageChange: body => {
			dispatch(updateNewMessageActionCreator(body))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer
