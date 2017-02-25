const React = require('react')

class NewCharacter extends React.Component {

  render(){
    const { state, dispatch } = this.props
    return (
      <div>
        hello new characters
      </div>
    )
  }
}



module.exports = NewCharacter
