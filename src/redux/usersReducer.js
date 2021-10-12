const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_FETCHING = 'SET_FETCHING'

let initialState = {
  users: [
    /*{id: 1, photoUrl: 'https://p7.hiclipart.com/preview/791/512/882/user-profile-computer-icons-internet-bot-others-thumbnail.jpg', followed: false, fullName: 'Aleksandr', status: 'I am a boss', location: {city: 'Kurgan', country: 'Russia'}},
    {id: 2, photoUrl: 'https://p7.hiclipart.com/preview/791/512/882/user-profile-computer-icons-internet-bot-others-thumbnail.jpg', followed: true, fullName: 'Dmitry', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, photoUrl: 'https://p7.hiclipart.com/preview/791/512/882/user-profile-computer-icons-internet-bot-others-thumbnail.jpg', followed: false, fullName: 'Alena', status: 'I am a boss too', location: {city: 'Yekaterinburg', country: 'Russia'}}*/
  ],
  pageSize: 50,
  totalUsersCount: 100,
  isFetching: false,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  //let stateCopy

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId)
            return {
              ...u,
              followed: true
            }
          return u
        })
      }

      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if(u.id === action.userId)
              return {
                ...u,
                followed: false
              }
            return u
          })
        }

      case SET_USERS:
        return {
          ...state,
          users: [/*...state.users,*/ ...action.users] // Добавить ли к старым или заменить
        }
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.currentPage
        }
      case SET_TOTAL_COUNT:
        return {
          ...state,
          totalUsersCount: action.totalUsersCount
        }
      case SET_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching
        }
    default:
      return state
  }
}

export const follow = userId => ({
  type: FOLLOW,
  userId
})

export const unfollow = userId => ({
  type: UNFOLLOW,
  userId
})

export const setUsers = users => ({
  type: SET_USERS,
  users
})

export const setPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount
})

export const setFetching = isFetching => ({
  type: SET_FETCHING,
  isFetching
})

export default usersReducer