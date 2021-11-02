import React from 'react'
import { addPost, getStatus, getUserProfile, updateStatus } from './../../redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { compose } from 'redux'
//import s from './Profile.module.css'

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId || 20226
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}
	
	render() {
		return (
			<Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
		)
	}
}
/*posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}*/

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		profile: state.profilePage.profile,
		status: state.profilePage.status
	}
}

//let WithUserDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose(
	connect(mapStateToProps,
		{
			addPost,
			getUserProfile,
			getStatus,
			updateStatus
		}
	),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
