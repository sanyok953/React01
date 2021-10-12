import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'

const Users = (props) => {

  if(props.users.length < 5)

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      console.log(response)
      props.setUsers(response.data.items)
    })
    /*props.setUsers( 
      [
        {id: 4, photoUrl: 'https://p7.hiclipart.com/preview/791/512/882/user-profile-computer-icons-internet-bot-others-thumbnail.jpg', followed: true, fullName: 'Tanya', status: 'I am a boss too', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 5, photoUrl: 'https://p7.hiclipart.com/preview/791/512/882/user-profile-computer-icons-internet-bot-others-thumbnail.jpg', followed: false, fullName: 'Pedro', status: 'I am a boss too', location: {city: 'Barcelona', country: 'Spain'}}
      ]
    )*/

  let allUsers = props.users.map(u => <div className={s.wrapper} key={u.id}>

    <span className={s.phWrap}>
      <div>
        <img src={
            u.photos.small ?
            u.photos.small :
            userPhoto
          } alt='' className={s.photo} />
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
  
  return (
    <div>
      <p>Users here</p>
      {allUsers}
    </div>
  )
}

export default Users