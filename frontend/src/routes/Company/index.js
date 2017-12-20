import { injectReducer } from 'store/reducers'

const routes = (store) => {
  return {
    path: 'company',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const component = require('./containers/CompanyContainer').default
        cb(null, component)
      })
    },
  }
}

export default routes

