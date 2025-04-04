const Joi = require('joi');

const validateTicket_type = (ticket_type) => {
    const schema = Joi.object({
        color: Joi.string().required(),
        name: Joi.string().min(3).required(),
        ticket_id: Joi.number().required(),
    });
    return schema.validate(ticket_type);
};

module.exports = { validateTicket_type };