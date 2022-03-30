var express = require('express');
/**var router = express.Router();  //Router: 자바로 치면 컨트롤러, 리액트와 통신한다.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});  
*/

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header(

    )
  });
  // next();
  app.get("", () => {})
  app.post("", () => {})
  app.update("", () => {})
  app.delete("", () => {})
}