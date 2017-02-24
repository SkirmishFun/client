const initialState = require('../state')
module.exports = function user (state = initialState.user, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload
    default:
      return state
  }
}
