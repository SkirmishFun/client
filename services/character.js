module.exports = {
  new: function({archetype, name, artifact}, user, cb){
    console.log({archetype, name, artifact})
    cb(null, 'a winner is you!')
  }
}
