const React = require('react')
const { render } = require('react-dom')
import App from './components/app'
import Router from 'sheet-router'
import { createStore } from 'redux'

const Login = require('./components/login')
const Home = require('./components/home')
const initialState = require('./state')

var reducer = require('./reducer')

var app = document.createElement('div')
document.querySelector('main').appendChild(app)


var store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store


const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/home', (params) => Home]
])

subscribe(() => {
  console.log(getState().route);
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App name='bizzBuzz' />, app)

dispatch({type: 'INIT'})
