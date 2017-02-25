const initialState = require('../state')
module.exports = function route (state = initialState.route, action) {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      return action.payload

    case 'LOGIN_SUCCESS':
      return '/home'
    default:
      return state
  }
}
