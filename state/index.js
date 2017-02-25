module.exports = {
  route: '/',
  user: {},
  creatingCharacter: {
    name: null,
    archtype: null,
    artifact: null,
  },
  archtypes: [
    {id: 1, name: 'Warrior'},
    {id: 2, name: 'Rogue'},
    {id: 3, name: 'Wizard'},
    {id: 4, name: 'Monk'}
  ],
  artifacts: [
    {id: 1, archtype: 2, name: 'default rogue'},
    {id: 2, archtype: 1, name: 'default warrior'},
    {id: 3, archtype: 4, name: 'default monk'},
    {id: 4, archtype: 3, name: 'default wizard'}
  ]
}
