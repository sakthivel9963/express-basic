const router = require('express').Router();

router.get('/ping', (req, res) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});

module.exports = router;
