const React = require('react')

class NewCharacterCreate extends React.Component {

  handleSubmit(){
    const { state } = this.props
    const { name, archtype, artifact } = state.creatingCharacter
    console.log({ name, archtype, artifact })
  }

  handleChangeName(){
    const { dispatch } = this.props
    const name = this.refs.name.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'name', value: name}})
  }

  handleChangeArchtype(){
    const { dispatch } = this.props
    const archtype = this.refs.archtype.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'archtype', value: archtype}})
  }

  handleChangeArtifact(){
    const { dispatch } = this.props
    const artifact = this.refs.artifact.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'artifact', value: Number(artifact) || null}})
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
          <input onChange={this.handleChangeName.bind(this)} type='text' placeholder='Charcter Name' ref='name' />
        </form>
        <select onChange={this.handleChangeArchtype.bind(this)} ref='archtype'>
          <option value={null}>Select Class</option>
          <option value='warrior'>Warrior</option>
          <option value='rogue'>Rogue</option>
          <option value='wizard'>Wizard</option>
          <option value='monk'>Monk</option>
        </select>
        <select onChange={this.handleChangeArtifact.bind(this)} ref='artifact'>
          <option value={null} >Select artifact</option>
          {renderArtifacts(artifacts)}
        </select><br />
        <button onClick={this.handleSubmit.bind(this)}>Create</button>
      </div>
    )
  }
}



module.exports = NewCharacterCreate
