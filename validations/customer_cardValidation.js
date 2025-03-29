const Joi = require('joi');

const validateCustomer_card = (customer_card) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().min(3).required(),
        phone: Joi.string().pattern(/^\+998\d{9}$/),
        number: Joi.string().required(),
        year: Joi.string().required(),
        month: Joi.string().required(),
        is_active: Joi.boolean().required(),
        is_main: Joi.boolean().required(),
    });
    return schema.validate(customer_card);
};

module.exports = { validateCustomer_card };