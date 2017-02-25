const initialState = require('../state')
module.exports = function creatingCharacter (state = initialState.creatingCharacter, action) {
  switch (action.type) {

    case 'CHANGE_CREATE':
      return Object.assign({}, state, {
        [action.payload.type]: action.payload.value
      })

    default:
      return state
  }
}
