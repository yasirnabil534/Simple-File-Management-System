const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { userAPI } = require('../utils/apiEndpoints');
const {
    createUser,
    getUsers,
    getUserByID,
    updateUserByID,
    setAccessToFile,
} = require('../services/userService');
const { authenticateToken } = require('../middlewares/tokenAuthenticator');

// ? API to sign in
router.post(
    userAPI.CREATE,
    [
        body('name', 'name is required').notEmpty(),
        body('email', 'Please enter a valid email').notEmpty().isEmail(),
        body('password', 'Please enter at least 6 digits').isLength({ min: 6 }),
        body('type', 'type is required').notEmpty(),
        body('type', 'type must be admin or user').isIn(['admin', 'user']),
    ],
    createUser
);

// ? API to get all users
router.get(userAPI.ALL, authenticateToken, getUsers);

// ? API to get user by ID
router.get(userAPI.USER_BY_ID, authenticateToken, getUserByID);

// ? API to update user by ID
router.put(userAPI.USER_BY_ID, authenticateToken, updateUserByID);

// ? API to set access of a file
router.put(userAPI.SET_FILE, setAccessToFile);

module.exports = router;