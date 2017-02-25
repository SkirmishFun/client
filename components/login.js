const React = require('react')
const request = require('superagent')

const loginService = require('../services/login')

class Login extends React.Component{

  handleSubmit(e){
    const { dispatch } = this.props
    const username = this.refs.username.value || ' '
    const password = this.refs.password.value || ' '
    loginService({ username, password }, dispatch);
    e.preventDefault()
  }

  render(){
    return (
      <div>
        <form>
          <div>
            Email:
            <input type='text' placeholder='Username' ref='username' />
            Password:
            <input type='password' placeholder='Password' ref='password' />
            <button onClick={this.handleSubmit.bind(this)}>Login </button>
          </div>
        </form>
      </div>
    )
  }

  }

module.exports = Login
