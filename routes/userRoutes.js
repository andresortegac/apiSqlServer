'use strict';

const express = require('express');
const userControll = require('../controllers/userController');
const router = express.Router();

router.get('/users', userControll.getUsers);
router.get('/users/:id', userControll.getUserById);
router.post('/users', userControll.addUser);
router.put('/users/:id', userControll.updatUser);
router.delete('/users/:id', userControll.deleteUser);

module.exports = {
    routes: router
}

