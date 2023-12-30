const { validationResult } = require('express-validator');
const User = require('../Models/User');
const { hashPassword } = require('../common/managePass');
const { userType } = require('../utils/enums');

// * Function to create an user
const createUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ message: errors })
        } else {
            const password = await hashPassword(req?.body?.password);
            const userObj = {
                name: req?.body?.name,
                email: req?.body?.email,
                password,
                rawPassword: req?.body?.password,
                type: req?.body?.type,
                address: req?.body?.address,
            };
            const user = await new User(userObj);
            await user.save();
            const newUser = await User.findOne({ email: req.body?.email });
            if (newUser) {
                res.status(201).json({ message: 'User created successfully', user: newUser });
            } else {
                res.status(503).json({ message: 'User cannot be created' });
            }
        }
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// * Function to find users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (users) {
            res.status(200).json({ users });
        } else {
            res.status(400).json({ message: 'Users cannot be found.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// * Function to find user by id
const getUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ user });
        }
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong ' });
    }
};

// * Function to update user by ID
const updateUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else if (req?.user?.type !== userType.ADMIN) {
            res.status(403).json({ message: 'You need to be ADMIN' });
        } else {
            const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
            if (!updateUser) {
                res.status(400).json({ message: 'Somthing wrong with the update' });
            } else {
                res.status(200).json({ user: updateUser });
            }
        }
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong ' });
    }
};

const setAccessToFile = async (req, res) => {
    try {
        const fileId = req?.body?.fileId;
        const id = req?.body?.id;
        const user = await User.findById(id);
        user.accessList.push(fileId);
        const updateUser = await User.findByIdAndUpdate(id, user, { new: true });
        if (!updateUser) {
            res.status(400).json({ message: 'Somthing wrong with the update' });
        } else {
            res.status(200).json({ user: updateUser });
        }
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong ' });
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserByID,
    updateUserByID,
    setAccessToFile,
}