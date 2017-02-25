module.exports = {
  route: '/',
  user: {},
  creatingCharacter: {
    name: null,
    archetype: null,
    artifact: null,
  },
  archetypes: [],
  artifacts: [
    {id: 1, archetype: 2, name: 'default rogue'},
    {id: 2, archetype: 1, name: 'default warrior'},
    {id: 3, archetype: 4, name: 'default monk'},
    {id: 4, archetype: 3, name: 'default wizard'}
  ]
}
