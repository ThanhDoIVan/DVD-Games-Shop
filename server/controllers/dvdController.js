const uuid = require('uuid');
const path = require('path');
const {Dvd} = require('../models/models');
const ApiError = require('../error/ApiError');

class DvdController {
    async create(req, res, next) {
        try {
            const {name, price, release_date, genreId, developerId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
            const dvd = await Dvd.create( {name, price, release_date, genreId, developerId, img: fileName} )
            
            return res.json(dvd);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        let {genreId, developerId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let dvds;

        if (!genreId && !developerId) {
            dvds = await Dvd.findAndCountAll( {limit, offset} );
        }

        if (genreId && !developerId) {
            dvds = await Dvd.findAndCountAll( {where: {genreId}, limit, offset} );
        }

        if (!genreId && developerId) {
            dvds = await Dvd.findAndCountAll( {where: {developerId}, limit, offset} );
        }

        if (genreId && developerId) {
            dvds = await Dvd.findAndCountAll( {where: {genreId, developerId}, limit, offset} );
        }

        return res.json(dvds);
    }

    async getOne(req, res) {
        
    }

}

module.exports = new DvdController();