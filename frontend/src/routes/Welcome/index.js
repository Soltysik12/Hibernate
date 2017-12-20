import { injectReducer } from 'store/reducers'

const routes = (store) => {
  return {
    path: 'welcome',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const component = require('./containers/WelcomeContainer').default
        cb(null, component)
      })
    },
  }
}

export default routes

