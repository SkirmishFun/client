const initialState = require('../state')
module.exports = function creatingCharacter (state = initialState.creatingCharacter, action) {
  switch (action.type) {

    case 'CHANGE_ARCHTYPE':
      return Object.assign({}, state, {
        archtype: action.payload
      })

    default:
      return state
  }
}
