const initialState = require('../state')
module.exports = function archetypes (state = initialState.archetypes, action) {
  switch (action.type) {
    
    case 'UPDATE_ARCHETYPES':
      return action.payload

    default:
      return state
  }
}
