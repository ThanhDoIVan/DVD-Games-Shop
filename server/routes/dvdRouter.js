const Router = require('express');
const router = new Router();
const dvdController = require('../controllers/dvdController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/',checkRole('ADMIN'), dvdController.create);
router.get('/', dvdController.getAll);
router.get('/:id', dvdController.getOne);

module.exports = router;