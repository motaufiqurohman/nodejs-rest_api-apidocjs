const Joi = require('@hapi/joi');

module.exports = (requestBody) => {
    const schema = {
        namaLengkap: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        levelUser: Joi.string().valid(['', 'member', 'admin']),
        status: Joi.string().valid(['', 'active', 'deleted'])
    };
    return Joi.validate(requestBody, schema);
};