import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { CustomInput } from '../../common/FormsControls/FormsControls'

const mv10 = maxLengthCreator(10)

const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} id={p.id} key={p.id} />)

	let onAddPost = formData => {
		props.addPost(formData.newPostText)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div className={s.posts}>
				{postsElements}
			</div>
			<AddPostFormRedux onSubmit={onAddPost} />
		</div>
	)
}

const AddPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<div>
					<Field
						validate={[required, mv10]}
						name={'newPostText'}
						component={CustomInput}
            creator={'textarea'} // custom
						placeholder={'Enter post title'}
					/>
				</div>
				<div>
					<button>Add</button>
				</div>
			</div>
		</form>
	)
}

const AddPostFormRedux = reduxForm({ form: 'addPostForm' })(AddPostForm)

export default MyPosts
