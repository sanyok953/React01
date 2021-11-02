import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addMessage } from '../../redux/dialogsReducer'
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

//let AuthRedirectComponent = withAuthRedirect(Dialogs)


let mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageBody: state.dialogsPage.newMessageBody
	}
}

/*let mapDispatchToProps = dispatch => {
	return {
		addMessage: () => {
			dispatch(addMessage(message))
		}
	}
}*/

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) ()

export default compose(
connect(mapStateToProps, { addMessage }),
	withAuthRedirect
)(Dialogs)
