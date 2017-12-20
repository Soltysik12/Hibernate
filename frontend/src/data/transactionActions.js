import { actionType } from './transactionReducer.js'
import api from '../api'

export const sendTransactionData = (data) => {
  return (dispatch) => {
    return api.post('newTransaction/', data)
      .then((response) => {
      })
      .catch((error) => {
      })
  }
}

export const sendCompanyData = (data) => {
  return (dispatch) => {
    return api.post('newCompany/', data)
      .then((response) => {
      })
      .catch((error) => {
      })
  }
}

export const sendProductData = (data) => {
  return (dispatch) => {
    return api.post('newProduct/', data)
      .then((response) => {
      })
      .catch((error) => {
      })
  }
}
