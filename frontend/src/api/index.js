/* @flow */
import axios from 'axios'
import { hashHistory } from 'react-router'
import cookie from 'react-cookie'

export const API_URL = 'http://127.0.0.1:8080/'

export let redirectUrl = undefined

export const getRedirectUrl = () => redirectUrl


export const resetRedirectUrl = () => {
  redirectUrl = undefined
}

const api = axios.create({
  withCredentials: 'same-origin',
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    config.headers.Token = cookie.load('Token')
    return config
  },
  (error) => {
    return // eslint-disable-next-line
    Promise.reject(error)
  }
)

api.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    if (error.response.status === 401) {
      redirectUrl = window.location.hash.substring(1)
      hashHistory.push('/')
    }
    return Promise.reject(error) //eslint-disable-line
  }
)

export default api
