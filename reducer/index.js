const { combineReducers } = require('redux')

const user = require('./user')
const route = require('./route')
const creatingCharacter = require('./creatingCharacter')
const archetypes = require('./archetypes')
const artifacts = require('./artifacts')

module.exports = combineReducers({
  user,
  route,
  creatingCharacter,
  archetypes,
  artifacts
})
