const React = require('react')

const submitCharacter = require('../../services/character').new
const getArchetypes = require('../../services/archetypes').getAll
const getArtifacts = require('../../services/artifacts').getAll

class NewCharacterCreate extends React.Component {

  componentDidMount(){
    const { state, dispatch } = this.props
    const { user_id } = state.user
    getArchetypes((err, res) => {
      if(err) throw err
      dispatch({type: 'UPDATE_ARCHETYPES', payload: res.body})
    })
    getArtifacts(user_id, (err, res) => {
      if(err) throw err
      console.log(res)
    })
  }

  handleSubmit(){
    const { state } = this.props
    const { user_id } = state.user
    const { name, archetype, artifact } = state.creatingCharacter
    submitCharacter({ name, archetype, artifact }, user_id, (err, res) => {
      if(err) throw err
      console.log(res)
    })
  }

  handleChangeName(){
    const { dispatch } = this.props
    const name = this.refs.name.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'name', value: name}})
  }

  handleChangeArchetype(){
    const { dispatch } = this.props
    const archetype = this.refs.archetype.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'archetype', value: Number(archetype) || null}})
  }

  handleChangeArtifact(){
    const { dispatch } = this.props
    const artifact = this.refs.artifact.value
    dispatch({type: 'CHANGE_CREATE', payload: {type: 'artifact', value: Number(artifact) || null}})
  }

  render(){
    const { state, dispatch } = this.props
    const { archetypes, artifacts } = state
    function renderArtifacts(artifacts){
      const filteredArtifacts = artifacts.filter(artifact => {
        return state.creatingCharacter.archetype === artifact.archetype
      })
      return filteredArtifacts.map(artifact => {
        return <option key={artifact.id} value={artifact.id}>{artifact.name}</option>
      })
    }
    function renderArchetypes(archetypes){
      return archetypes.map(archetype => {
        const { archetype_id, archetype_name } = archetype
        return <option key={archetype_id} value={archetype_id}>{archetype_name}</option>
      })
    }
    return (
      <div>
        <form>
          <input onChange={this.handleChangeName.bind(this)} type='text' placeholder='Charcter Name' ref='name' />
        </form>
        <select onChange={this.handleChangeArchetype.bind(this)} ref='archetype'>
          <option value={null}>Select Class</option>
          {renderArchetypes(archetypes)}
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
