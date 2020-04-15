const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM players", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
    })
}

const getUserById = (req, res) => {
  let sql = "SELECT * FROM players WHERE id = ?"
    sql = mysql.format(sql, [ req.params.id ])

    pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    // createUser,
    // updateUserById,
    // deleteUserByFirstName
  }