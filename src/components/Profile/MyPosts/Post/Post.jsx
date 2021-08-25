import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img alt='postAlt' src='https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200' />
			{props.message}
			<div>
				<span>Like</span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post
