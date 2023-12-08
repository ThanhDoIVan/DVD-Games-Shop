const Router = require('express');
const router = new Router();
const dvdController = require('../controllers/dvdController');

router.post('/', dvdController.create);
router.get('/', dvdController.getAll);
router.get('/:id', dvdController.getOne);

module.exports = router;