import React from 'react'
import { connect } from "react-redux"
import * as axios from 'axios'
import { follow, unfollow, setUsers, setPage, setTotalUsersCount, setFetching } from "../../redux/usersReducer"
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withRouter } from 'react-router-dom'

// Container second network requests
class UsersContainer extends React.Component {

  componentDidMount() {
    let pg = 1
    if(this.props.match.params === undefined || this.props.match.params.page === undefined)
      pg = this.props.currentPage
    else {
      pg = Number.parseInt(this.props.match.params.page)
      this.onPageChanged(pg)
    }

    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pg}&count=${this.props.pageSize}`)
    .then(response => {
      console.log("Mount ", response)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
      this.props.setFetching(false)
    })
  }

  componentWillUnmount() {
    this.props.setUsers([])
  }

  onPageChanged = pageNumber => {
    this.props.setPage(pageNumber)
    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      //console.log("Mount ", response)
      this.props.setUsers(response.data.items)
      this.props.setFetching(false)
    })
  }

  render() { // Вызывает connect
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    if(pagesCount > 10) {

      pages.push(1) // Первая
      let cp = this.props.currentPage // Текущая
      for(let h = 3; h > 0; h --) {
        if(cp - h > 1) // Добавляем 3 страницы слева первая уже есть игнорим
          pages.push(cp - h)
      }
      
      if(cp !== 1 && cp !== pagesCount) // Добавляем текущую страницу, если первая или последняя то игрорим и так добавятся
        pages.push(cp)

      for(let g = 1; g <= 3; g ++) {
        if(cp + g < pagesCount)// Добавляем 3 страницы справа последняя будет позже игнорим
          pages.push(cp + g)
      }
      pages.push(pagesCount)

    } else {

      for(let i = 1; i <= pagesCount; i ++) {
        pages.push(i)
      }

    }
    return (
      <>
        {this.props.isFetching ? <Preloader /> :
        <Users
          pages={pages}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
        }
      </>
    )
  }
}

// Container first react-redux connect

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

/*let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId))
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: page => {
      dispatch(setPageAC(page))
    },
    setTotalUsersCount: tc => {
      dispatch(setTotalCountAC(tc))
    },
    setFetching: fetch => {
      dispatch(setFetching(fetch))
    }
  }
}*/

let WithUserDataContainerComponent = withRouter(UsersContainer)

export default connect(mapStateToProps, 
  {
    follow, unfollow, setUsers,
    setPage, setTotalUsersCount, setFetching
  }
)(WithUserDataContainerComponent)