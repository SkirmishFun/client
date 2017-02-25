const { combineReducers } = require('redux')

const user = require('./user')
const route = require('./route')
const creatingCharacter = require('./creatingCharacter')

module.exports = combineReducers({
  user,
  route,
  creatingCharacter
})
