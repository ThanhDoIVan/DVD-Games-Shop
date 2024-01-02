const Router = require('express');
const router = new Router();

const dvdRouter = require('./dvdRouter');
const userRouter = require('./userRouter');
const developerRouter = require('./developerRouter');
const genreRouter = require('./genreRouter');
const ratingRouter = require('./ratingRouter');

router.use('/user', userRouter);
router.use('/dvd', dvdRouter);
router.use('/genre', genreRouter);
router.use('/developer', developerRouter);
router.use('/rating', ratingRouter);

module.exports = router;