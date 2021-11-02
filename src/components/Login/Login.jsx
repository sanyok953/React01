import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { CustomInput } from '../common/FormsControls/FormsControls'

const ma10 = maxLengthCreator(10)

const LoginForm = props => {
  console.log('login', props)
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={CustomInput} name={'login'} placeholder={'Login'} creator={'input'} validate={[required, ma10]} />
      </div>
      <div>
        <Field component={CustomInput} name={'password'} placeholder={'Password'} creator={'input'} validate={[required, ma10]} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />Remember me
      </div>
      <div>
        <button>SUBMIT</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = formData => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login