import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { CustomInput } from '../../common/FormsControls/FormsControls'
import s from './../Dialogs.module.css'

const ma30 = maxLengthCreator(30)

const AddMessageForm = props => {
	return (
		<div className={s.sendMessageArea}>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
            component={CustomInput}
            name={'newMessageBody'}
            creator={'textarea'} // custom
            placeholder='Enter your message'
            validate={[required, ma30]}
          />
					<button>Add</button>
				</div>
				<div>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)