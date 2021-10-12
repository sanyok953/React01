import React from 'react'
import DialogItem from './DialogItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

let newMessage = React.createRef()

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
	let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id} right={m.send} />)

	let onAddMessage = () => {
		props.addMessage()
	}
	
	let onMessageChange = (e) => {
		let body = e.target.value
		props.messageChange(body)
	}

	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
				</div>
			</div>
			<div className={s.sendMessageArea}>
				<div>
					<textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageBody} placeholder='Enter your message'></textarea>
				</div>
				<div>
					<button onClick={onAddMessage}>Add</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
