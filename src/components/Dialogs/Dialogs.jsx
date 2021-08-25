import React from 'react'
import DialogItem from './DialogItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

let newMessage = React.createRef()

let addMessage = () => {
	let text = newMessage.current.value
	alert(text)
}

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
	let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} key={m.id} right={m.id <= 2} />)

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
					<textarea ref={newMessage}></textarea>
				</div>
				<div>
					<button onClick={addMessage}>Add</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
