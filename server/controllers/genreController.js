const {Genre} = require('../models/models');
const ApiError = require('../error/ApiError');

class GenreController {
    async create(req, res, next) {
        const {name} = req.body;
        const duplicate = await Genre.findOne({where: {name}});
        if (duplicate) {
            return next(ApiError.forbidden('Значение не должно повторяться'));
        }
        
        const genre = await Genre.create({name});
        return res.json(genre);
    }

    async getAll(req, res) {
        const genres = await Genre.findAll();
        return res.json(genres);
    }

}

module.exports = new GenreController();