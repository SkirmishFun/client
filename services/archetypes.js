const request = require('superagent')

const url = require('../requestURL')

module.exports = {
  getAll: function(cb){
    request.get(`${url}archetypes/`)
      .end((err, res) => {
        cb(err, res)
      })
  }
}
