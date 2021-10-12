import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'

/*const DialogItem = (props) => {
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
}*/

const Users = (props) => {
  return(
    <div>
      <p>Users here</p>
      <div>
      {
        //props.pages.map(p => <span onClick={e => {props.onPageChanged(p)}} className={props.currentPage === p ? s.selectedPage.concat(" ").concat(s.pgn) : s.pgn.concat(" ").concat(s.pg)} key={p}>{p}</span>)
        props.pages.map(p => <NavLink onClick={e => {props.onPageChanged(p)}} to={'/users/'.concat(p)} activeClassName={s.selectedPage} className={s.pgn} key={p}>{p}</NavLink>)
      }
      </div>
      {
        props.users.map(u => <div className={s.wrapper} key={u.id}>

          <span className={s.phWrap}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={
                    u.photos.small ?
                    u.photos.small :
                    userPhoto
                  } alt='' className={s.photo} />
              </NavLink>
            </div>
            <div>
              { u.followed
              ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
            </div>
          </span>
          <span className={s.inWrap}>
            <span>
              <div className={s.names}>{u.name}</div>
              <br />
              <div className={s.names}>{u.status}</div>
            </span>
            <span>
              <div className={s.location}>{"u.location.city"}</div>, 
              <div className={s.location}>{"u.location.country"}</div>
              <div></div>
            </span>
          </span>
        </div>)
      }
      <div>
      {
        props.pages.map(p => <span onClick={e => {props.onPageChanged(p)}} className={props.currentPage === p ? s.selectedPage.concat(" ").concat(s.pgn) : s.pgn.concat(" ").concat(s.pg)} key={p}>{p}</span>)
      }
      </div>
    </div>
  )
}

export default Users