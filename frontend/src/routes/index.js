import CoreLayout from '../layouts/CoreLayout'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : { onEnter: (nextState, replace) => replace('welcome') },
  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Welcome').default(store),
        require('./Summary').default(store),
        require('./Product').default(store),
        require('./Company').default(store),
      ])
    })
  },
})

export default createRoutes
