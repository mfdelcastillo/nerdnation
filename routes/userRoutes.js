const router = express.Router()
const userController = require('../controllers/userController');

router.post('/api/users', userController.create);
module.exports = router;