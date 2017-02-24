const { combineReducers } = require('redux')

const user = require('./user')
const loginDetails = require('./loginDetails')
const route = require('./route')

module.exports = combineReducers({
  user,
  loginDetails,
  route
})
