import { combineReducers } from 'redux'
import locationReducer from './location'
import { i18nReducer as i18n } from 'react-redux-i18n'
import { routerReducer as routing } from 'react-router-redux'
import transaction from 'data/transactionReducer'


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing,
    location: locationReducer,
    i18n,
    transaction,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {return}

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
