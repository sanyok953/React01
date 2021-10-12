import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Friends from './Friends/Friends'

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/users' activeClassName={s.active}>Users</NavLink>
			</div>
			<div className={s.item}>News</div>
			<div>Music</div>
			<div>Settings</div>

			<Friends state={props.state} />
		</nav>
	)
}

export default Navbar