//import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

/*const MyPostsContainer = () => {

	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState()
				let addPost = () => {
					store.dispatch(addPostActionCreator())
				}

				let onPostChange = (text) => {
					store.dispatch(updateNewPostActionCreator(text))
				}
				return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />

			}
			}
		</StoreContext.Consumer>
	)
}*/

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = dispatch => {
	return {
		addPost: title => {
			dispatch(addPost(title))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
