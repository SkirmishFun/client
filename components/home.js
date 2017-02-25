const React = require('react')

class Home extends React.Component {

  render(){
    const { state, dispatch } = this.props
    return (
      <div>
        <ul>
          <li>create team</li>
          <li>?create character (could be in create team?)</li>
          <li>find a match</li>
          <li>my stats</li>
          <li>get new artifacts</li>
        </ul>
        <button onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/characters/new'})}>
          Create New Character
        </button>
      </div>
    )
  }
}



module.exports = Home
