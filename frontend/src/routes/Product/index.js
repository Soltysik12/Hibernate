import { injectReducer } from 'store/reducers'

const routes = (store) => {
  return {
    path: 'product',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const component = require('./containers/ProductContainer').default
        cb(null, component)
      })
    },
  }
}

export default routes

