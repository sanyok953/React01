import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state'
import s from './MyPosts.module.css'
import Post from './Post/Post'

/*const data = [
	{ message: 'Hi !!!', likesCount: 2 },
	{ message: 'How are you ???', likesCount: 24 },
	{ message: 'Bye !!!', likesCount: 12 }
]*/

const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} id={p.id} key={p.id} />)

	let newPostElement = React.createRef()

	let addPost = () => {
		props.dispatch(addPostActionCreator())
		props.dispatch(updateNewPostActionCreator(''))
		//console.log(text)
		//props.updateNewPostText('')
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		//console.log(text)
		props.dispatch(updateNewPostActionCreator(text))
		//props.updateNewPostText(text)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts
