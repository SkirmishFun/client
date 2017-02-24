const initialState = require('../state')
module.exports = function loginDetails (state = initialState.loginDetails, action) {
  switch (action.type) {

    case 'UPDATE_LOGIN':
      return Object.assign({}, state, {
        [action.payload.field]: action.payload.content
      })

    default:
      return state
  }
}
