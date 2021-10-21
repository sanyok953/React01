import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
const Header = props => {
	return (
		<header className={s.header}>
			<img alt="dd" src='https://avatars.mds.yandex.net/get-zen-logos/200214/pub_5f215ad1e2b1262704c988a2_5f6a83161a32447f2d4dadd8/xxh' />
			<div className={s.login} onClick={props.setAuthUserData}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Sign in</NavLink>}
			</div>
		</header>
	)
}

export default Header
