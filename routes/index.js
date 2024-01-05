var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  const p = await require("child_process").execSync("ls")
  res.send(p)
  //res.render('index', { title: 'Express' });
});

module.exports = router;
