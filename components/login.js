const React = require('react')
const request = require('superagent')

module.exports = ({state, dispatch}) => {
  console.log({state});
  function handleSubmit(email, password){
    request.post('api/v1/users/login')
    .send({ email, password })
    .end((err, response) => {
      if(err) console.log(err)
      console.log(response)
    })
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
        <button onClick={() => handleSubmit('email', 'password')} >Login </button>
      </form>
    </div>
  )
}
