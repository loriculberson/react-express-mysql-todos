const router = require('express').Router();
var db = require('../../models');
// get route -> index
router.get('/', function (req, res) {
  //do things here for other routes
});

router.get('/todos', function (req, res) {
  db.Todo.findAll({})
    .then((todos) => {
      console.log(todos);
      return res.json(todos);
    });
});