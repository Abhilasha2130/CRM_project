const db = require('../config/db');

exports.createCustomer = (data, callback) => {
    const sql = `INSERT INTO customers SET ?`;
    db.query(sql, data, callback);
};

exports.getAllCustomers = (callback) => {
    db.query(`SELECT * FROM customers WHERE is_active = true`, callback);
};

exports.getCustomerById = (id, callback) => {
    db.query(`SELECT * FROM customers WHERE id = ?`, [id], callback);
};

exports.updateCustomer = (id, data, callback) => {
    db.query(`UPDATE customers SET ? WHERE id = ?`, [data, id], callback);
};

exports.deleteCustomer = (id, callback) => {
    db.query(`UPDATE customers SET is_active = false WHERE id = ?`, [id], callback);
};
