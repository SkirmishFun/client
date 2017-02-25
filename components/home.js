const React = require('react')

class Home extends React.Component {

  render(){
    const { state, dispatch } = this.props
    console.log(state);
    return (
      <div>
        hello home
      </div>
    )
  }
}



module.exports = Home
