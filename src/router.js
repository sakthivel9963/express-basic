import express from 'express';

import exampleRouter from './api/example/example.contoller';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});

router.use('/example', exampleRouter);

export default router;
