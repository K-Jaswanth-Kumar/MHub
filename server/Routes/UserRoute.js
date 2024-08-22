const express = require('express');
const { loginUser, registerUser, getUser } = require('../Controllers/UserController');

const router = express.Router()



router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/:id',getUser)

module.exports = router;