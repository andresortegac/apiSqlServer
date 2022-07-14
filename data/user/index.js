'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsers = async () => 
{
    try
    {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const list = await pool.request().query(sqlQueries.selectUser);
        return list.recordset;

    } catch (error)    {

        return error.message;
    }
}

const getUserById = async (id_user)=>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const oneUser = await pool.request()
            .input('id_user', sql.Int, id_user)
            .query(sqlQueries.selectUserById);
        
        return oneUser.recordset;
        
    } catch (error){
        return error.message;
    }
}

const creatUser = async (userdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const insertUser = await pool.request()
                            .input('name_user', sql.VarChar(50), userdata.name_user)
                            .input('password_user', sql.VarChar(50), userdata.password_user)                            
                            .query(sqlQueries.createUser);                            
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    }
}


const updateUser = async (id_User, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const update = await pool.request()
                        .input('id_user', sql.Int, id_User)
                        .input('name_user', sql.VarChar(50), data.name_user)
                        .input('password_user', sql.VarChar(50), data.password_user)
                        .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (id_User) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const deleteUser = await pool.request()
                            .input('id_User', sql.Int, id_User)
                            .query(sqlQueries.deleteUser);
        return deleteUser.recordset;
    } catch (error) {
        return error.message;
    }
}



module.exports = {
    getUsers,    
    getUserById,
    creatUser,
    updateUser,
    deleteUser
}
