import express from 'express';

import ExampleController from './example.contoller';

const router = express.Router();

router.get('/', ExampleController.save);

export default router;
