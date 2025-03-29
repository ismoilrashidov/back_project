const Joi = require('joi');

const validateVenue_venuetype = (venue_venuetype) => {
    const schema = Joi.object({
        venueId: Joi.number().required(),
        venuetypeId: Joi.number().required(),
    });
    return schema.validate(venue_venuetype);
};

module.exports = { validateVenue_venuetype };