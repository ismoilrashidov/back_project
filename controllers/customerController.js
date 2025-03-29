const { Customer, Gender, Lang } = require("../models");
const { validateCustomer } = require("../validations/customerValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customer = await Customer.create(req.body);
        res.status(201).send(customer);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.loginCustomer = async (req, res) => {
    try {
        const { email, hashed_password } = req.body;

        if (!email || !hashed_password) {
            return res.status(400).json({ message: "Iltimos, email va parolni kiriting!" });
        }

        const customer = await Customer.findOne({ where: { email } });
        if (!customer) {
            return res.status(400).json({ message: "Kirish ma'lumotlari noto‘g‘ri!" });
        }

        const isMatch = await bcrypt.compare(hashed_password, customer.hashed_password);
        if (!isMatch) {
            return res.status(400).json({ message: "Kirish ma'lumotlari noto‘g‘ri!" });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET aniqlanmagan! .env faylini tekshiring.");
        }

        const token = jwt.sign(
            { customerId: customer.id, email: customer.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ 
            message: "Tizimga muvaffaqiyatli kirdingiz!", 
            token, 
            customerId: customer.id 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, {
            include: [
                {
                    model: Gender,
                    as: "genderrr",
                },
                {
                    model: Lang,
                    as: "lang",
                },
            ],
        });
        if (!customer) return res.status(404).send("Customer not found");
        res.status(200).send(customer);
        } catch (error) {
        res.status(500).send(error.message);
        }
};

exports.updateCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).send("Customer not found");
        await customer.update(req.body);
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).send("Customer not found");
        
        const customerData = customer.toJSON();

        await customer.destroy();
        res.status(204).send(customerData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

