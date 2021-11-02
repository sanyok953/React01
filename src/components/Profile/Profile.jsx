import MyPostsContainer from './MyPosts/MyPostsContainer'
//import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<div>
			<ProfileInfo {...props} />
			<MyPostsContainer/>
		</div>
	)
}
/*posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}*/
export default Profile
