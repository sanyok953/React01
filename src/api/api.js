import * as axios from 'axios'

const instanse = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "77972e32-6d50-4a3a-a538-9e2ae9d629a0"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const UsersAPI = {

  getUsers(pg = 1, pageSize = 10) {
    return instanse.get(`users?page=${pg}&count=${pageSize}`)
    .then(response => response.data)
  },

  follow(uid) {
    return instanse.post(`follow/${uid}`, {})
    .then(response => response.data)
  },

  unfollow(uid) {
    return instanse.delete(`follow/${uid}`)
    .then(response => response.data)
  }

}

export const ProfileAPI = {

  getProfile(userId) {
    return instanse.get(`profile/${userId}`)
    .then(response => response.data)
  },
  getStatus(userId) {
    return instanse.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instanse.put(`profile/status`, { status })
  }

}

export const AuthAPI = {

  getAuthMe() {
    return instanse.get(`auth/me/`)
    .then(response => response.data)
  }

}