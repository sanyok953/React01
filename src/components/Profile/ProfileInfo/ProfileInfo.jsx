import React from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.jpg'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = props => {

	if(!props.profile)
		return <Preloader />

	let img = userPhoto
	if(!(!props.profile || !props.profile.photos || !props.profile.photos.small))
		img = props.profile.photos.small
	
	return (
		<div>
			{/* <div>
				<img width='100%' height='120px'  alt="bg" src='https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200' />
			</div> */}
			<div className={s.descriptionBlock}>
				<img src={img} alt="" width="64px" height="64px" />
				{/* {props.profile ? props.profile.aboutMe : 'empty'} */}
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo
