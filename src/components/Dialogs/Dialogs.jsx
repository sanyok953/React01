import React from 'react'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import DialogItem from './DialogItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

//let newMessage = React.createRef()

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
	let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id} right={m.send} />)

	const onSubmit = formData => {
    console.log(formData)
		props.addMessage(formData.newMessageBody)
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
			<AddMessageForm onSubmit={onSubmit} />
		</div>
	)
}


export default Dialogs
