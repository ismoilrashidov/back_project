const Joi = require('joi');

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        address: Joi.string().required(),
        location: Joi.string().required(),
        site: Joi.string().required(),
        phone: Joi.string().pattern(/^\+998\d{9}$/),
        schema: Joi.string().required(),
        regionId: Joi.number().required(),
        districtId: Joi.number().required(),
    });
    return schema.validate(venue);
};

module.exports = { validateVenue };