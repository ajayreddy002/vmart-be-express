var express = require('express');
const { userRepository } = require('../user-repository/users');
const { users, adress } = require('../validations/users');
const validate = require('../validations/validate');
var router = express.Router();

router.post('/register', validate(users), userRepository.create);
router.post('/login', userRepository.login);
router.post('/add-address/:id', validate(adress), userRepository.addAddress);
router.get('/get-address/:id', userRepository.getAddressesByUserId);

module.exports = router;
