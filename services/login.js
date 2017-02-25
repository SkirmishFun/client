import request from 'superagent'
import url from '../requestURL'

module.exports = ({username, password}, dispatch) => {
  console.log("sending login");
  request
    .post(`${url}users/login`)
    .send({username, password})
    .withCredentials()
    .end((err, res) => {
      console.log(res);
      if (!err) {
       dispatch({ type: 'LOGIN_SUCCESS', payload: res.body })
      }
      else {
        console.log(err);
        dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
      }
    })
}
