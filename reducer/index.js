const { combineReducers } = require('redux')

const user = require('./user')
const route = require('./route')

module.exports = combineReducers({
  user,
  route
})
