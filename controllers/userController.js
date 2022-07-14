'use strict';

const userData = require('../data/user');

const getUsers = async (req, res, next) => 
{
    try
    {
        const users = await userData.getUsers();
        res.send(users);

    } catch (error)    {

        res.status(400).send(error.message);
    }
}

const getUserById = async (req, res, next) => 
{
    try
    {
        const id_user = req.params.id;
        const oneUser = await userData.getUserById(id_user);

        res.send(oneUser);

    } catch (error)    {

        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await userData.creatUser(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatUser = async (req, res, next) => {
    try {
        const id_user =  req.params.id;
        const data = req.body;
        const updated = await userData.updateUser(id_user, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id_user = req.params.id;
        const deletedUser = await userData.deleteUser(id_user);
        res.send(deletedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getUsers,
    getUserById,
    addUser,
    updatUser,
    deleteUser
}