import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer,
  I18n,
} from 'react-redux-i18n'


import en from './en'

const translations = {
  en,
}

export const setupTranslationsInStore = (store, locale) => {
  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translations))
  store.dispatch(setLocale('en'))
}

export const t = (labelName, values) => {
  return I18n.t(labelName, values)
}

export default I18n
