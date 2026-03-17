/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

const { authController } = require('../controllers/auth.controller');
const {
  authMiddleware,
  guestMiddleware,
} = require('../middlewares/auth.middleware');

router.post('/registration', guestMiddleware, authController.registration);

router.get(
  '/activation/:activationToken',
  guestMiddleware,
  authController.activation,
);
router.post('/login', guestMiddleware, authController.login);

module.exports = { router };
