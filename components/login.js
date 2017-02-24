const React = require('react')
const request = require('superagent')

const loginService = require('../services/login')

module.exports = ({state, dispatch}) => {
  console.log({state});
  function handleSubmit(e){
    e.preventDefault()
    loginService(state.loginDetails, dispatch)
  }
  const update = (content, field) => dispatch({type: 'UPDATE_LOGIN', payload: {content, field}})

  return (
    <div>
      <form>
        <div>
            Email:
            <input onChange={(e) => update(e.target.value, 'username')} type='text' placeholder='Username' />
            Password:
            <input onChange={(e) => update(e.target.value, 'password')}type='password' placeholder='Password' />
        </div>
        <button onClick={handleSubmit}>Login </button>
      </form>
    </div>
  )
}
