import { injectReducer } from 'store/reducers'

const routes = (store) => {
  return {
    path: 'summary',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const component = require('./containers/SummaryContainer').default
        cb(null, component)
      })
    },
  }
}

export default routes

