import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img width='100%' height='120px'  alt="bg" src='https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200' />
			</div>
			<div className={s.descriptionBlock}>
				avatar description
			</div>
		</div>
	)
}

export default ProfileInfo
