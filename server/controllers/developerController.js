const {Developer} = require('../models/models');
const ApiError = require('../error/ApiError');

class DeveloperController {
    async create(req, res, next) {
        const {name} = req.body;
        const duplicate = await Developer.findOne({where: {name}});
        if (duplicate) {
            return next(ApiError.forbidden('Значение не должно повторяться'));
        }

        const developer = await Developer.create({name});
        return res.json(developer);
    }

    async getAll(req, res) {
        const developers = await Developer.findAll();
        return res.json(developers);
    }

}

module.exports = new DeveloperController();