const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({MSG : "Listo para usar User"});
});

module.exports = router;