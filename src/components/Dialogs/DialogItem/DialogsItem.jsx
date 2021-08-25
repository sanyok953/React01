import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'



const DialogItem = (props) => {
	let path = "/dialogs/" + props.id
	//console.log(props)
	return (
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.activeD}>
					<img className={s.dialogsImg} alt='postAlt' src='https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f53e55ac84c033ffd142fe4_5f53e804019fb065e7ef2c19/scale_1200' />
					<div>{props.name}</div>
			</NavLink>
		</div>
	)
}


export default DialogItem
