import s from './../Dialogs.module.css'



const Message = (props) => {
	//console.log(props)
	return <div className={s.message + ' ' + (props.right === true ? s.right : s.left)}>
		<div className={s.areaVisible}>
			{props.right === true ? props.message : ''}
			<img className={s.dialogsImg} alt='postAlt' src='https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200' />
			{props.right === false ? props.message : ''}
		</div>
	</div>
}

export default Message
