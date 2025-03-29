const Joi = require('joi');

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
        phone: Joi.string().pattern(/^\+998\d{9}$/),
        hashed_password: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        birth_date: Joi.date().required(),
        gender: Joi.number().required(),
        lang_id: Joi.number().required(),
        hashed_refresh_token: Joi.string().required(),
    });
    return schema.validate(customer);
};

module.exports = { validateCustomer };