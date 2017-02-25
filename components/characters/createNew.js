const React = require('react')

const submitCharacter = require('../../services/character').new

class NewCharacterCreate extends React.Component {

  handleSubmit(){
    const { state } = this.props
    const { name, archtype, artifact } = state.creatingCharacter
    submitCharacter({ name, archtype, artifact })
  }

  handleChangeName(){
    const { dispatch } = this.props
    const name = this.refs.name.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'name', value: name}})
  }

  handleChangeArchtype(){
    const { dispatch } = this.props
    const archtype = this.refs.archtype.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'archtype', value: Number(archtype) || null}})
  }

  handleChangeArtifact(){
    const { dispatch } = this.props
    const artifact = this.refs.artifact.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'artifact', value: Number(artifact) || null}})
  }

  render(){
    const { state, dispatch } = this.props
    const { archtypes, artifacts } = state
    function renderArtifacts(artifacts){
      const filteredArtifacts = artifacts.filter(artifact => {
        return state.creatingCharacter.archtype === artifact.archtype
      })
      return filteredArtifacts.map(artifact => {
        return <option key={artifact.id} value={artifact.id}>{artifact.name}</option>
      })
    }
    function renderArchtypes(archtypes){
      return archtypes.map(archtype => {
        return <option key={archtype.id} value={archtype.id}>{archtype.name}</option>
      })
    }
    return (
      <div>
        <form>
          <input onChange={this.handleChangeName.bind(this)} type='text' placeholder='Charcter Name' ref='name' />
        </form>
        <select onChange={this.handleChangeArchtype.bind(this)} ref='archtype'>
          <option value={null}>Select Class</option>
          {renderArchtypes(archtypes)}
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
