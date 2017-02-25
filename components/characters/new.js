const React = require('react')

class NewCharacter extends React.Component {

  handleSubmit(){
    const charName = this.refs.charName.value
    const archtype = this.refs.archtype.value
    console.log({ charName, archtype })
  }

  handleChangeArchtype(){
    const { dispatch, state } = this.props
    const archtype = this.refs.archtype.value
    if(archtype) dispatch({type: 'CHANGE_ARCHTYPE', payload: archtype})
  }

  render(){
    const { state, dispatch } = this.props
    const artifacts = [
      {id: 1, archtype: 'rogue', name: 'default rogue'},
      {id: 2, archtype: 'warrior', name: 'default warrior'},
      {id: 3, archtype: 'monk', name: 'default monk'},
      {id: 4, archtype: 'wizard', name: 'default wizard'}
    ]
    function renderArtifacts(artifacts){
      const filteredArtifacts = artifacts.filter(artifact => {
        return state.creatingCharacter.archtype === artifact.archtype
      })
      return filteredArtifacts.map(artifact => {
        return <option key={artifact.id} value={artifact.id}>{artifact.name}</option>
      })
    }
    return (
      <div>
        <form>
          <input type='text' placeholder='Charcter Name' ref='charName' />
        </form>
        <select onChange={this.handleChangeArchtype.bind(this)} ref='archtype'>
          <option value={false}>Select Class</option>
          <option value='warrior'>Warrior</option>
          <option value='rogue'>Rogue</option>
          <option value='wizard'>Wizard</option>
          <option value='monk'>Monk</option>
        </select>
        <select ref='artifact'>
          <option value='default'>Select artifact</option>
          {renderArtifacts(artifacts)}
        </select><br />
        <button onClick={this.handleSubmit.bind(this)}>Create</button>
      </div>
    )
  }
}



module.exports = NewCharacter
