const router = require('express').Router();

const exampleRouter = require('./api/example/example.router');

router.get('/ping', (req, res) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});

router.use('/example', exampleRouter);

module.exports = router;
