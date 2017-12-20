/* @flow */
import Immutable from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const actionType = {
  LOGIN: 'LOGIN',
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [actionType.LOGIN]: (state, action) => {
    return state
      .set('email', action.data)
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  email: undefined,
})

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
