const customerModel = require('../models/customerModel');

exports.createCustomer = (req, res) => {
    customerModel.createCustomer(req.body, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Customer created", data: results });
    });
};

exports.getAllCustomers = (req, res) => {
    customerModel.getAllCustomers((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getCustomerById = (req, res) => {
    customerModel.getCustomerById(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

exports.updateCustomer = (req, res) => {
    customerModel.updateCustomer(req.params.id, req.body, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Customer updated", data: results });
    });
};

exports.deleteCustomer = (req, res) => {
    customerModel.deleteCustomer(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Customer deleted (soft)", data: results });
    });
};
