import React from 'react'
import { addPost, updateNewPost, setUserProfile } from './../../redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom'
//import s from './Profile.module.css'

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {

      //console.log("Mount ", response)
      this.props.setUserProfile(response.data)
      /*this.props.setTotalUsersCount(response.data.totalCount)
      this.props.setFetching(false)*/
    })
	}
	
	render() {
		return (
			<Profile {...this.props} />
		)
	}
}
/*posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}*/

let mapStateToProps = state => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts,
		profile: state.profilePage.profile
	}
}

let WithUserDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
	{
		updateNewPost,
		addPost,
		setUserProfile
	}
)(WithUserDataContainerComponent)
