const Router = require('express');
const router = new Router();

const dvdRouter = require('./dvdRouter');
const userRouter = require('./userRouter');
const developerRouter = require('./developerRouter');
const genreRouter = require('./genreRouter');

router.use('/user', userRouter);
router.use('/dvd', dvdRouter);
router.use('/genre', genreRouter);
router.use('/developer', developerRouter);

module.exports = router;