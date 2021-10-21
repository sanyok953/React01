import React from 'react'
import { connect } from "react-redux"
import { setUsers, setPage, toggleFollowingProgress, getUsers, followThunk, unfollowThunk } from "../../redux/usersReducer"
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withRouter } from 'react-router-dom'
//import { UsersAPI } from '../../api/api'
//import thunk from 'redux-thunk'


// Container second network requests
class UsersContainer extends React.Component {

  componentDidMount() {
    let currentPage = 1
    if(this.props.match.params === undefined || this.props.match.params.page === undefined) {
      currentPage = this.props.currentPage
      this.props.getUsers(currentPage, this.props.pageSize)
      console.log("Mount")
    } else {
      currentPage = Number.parseInt(this.props.match.params.page)
      this.onPageChanged(currentPage)
      console.log("PageCh")
    }
    
  }

  componentWillUnmount() {
    this.props.setUsers([])
  }

  onPageChanged = currentPage => {
    this.props.setPage(currentPage)
    this.props.getUsers(currentPage, this.props.pageSize)
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
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          followingInProgress = {this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

let WithUserDataContainerComponent = withRouter(UsersContainer)
export default connect(mapStateToProps, 
  {
    setUsers, followThunk,
    setPage, unfollowThunk,
    toggleFollowingProgress, getUsers
  }
)(WithUserDataContainerComponent)