const {Rating} = require('../models/models');
const ApiError = require('../error/ApiError');

class RatingController {
    async create(req, res, next) {
        try {
            let {rate, userId, dvdId} = req.body;
            const rating = await Rating.create( {rate, userId, dvdId} );
           
            return res.json(rating);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        let {userId, dvdId} = req.query;
        let ratings;

        // All ratings
        if (!userId && !dvdId) { 
            ratings = await Rating.findAll();
        }

        // User ratings
        if (userId && !dvdId) {
            ratings = await Rating.findAll( {where: {userId}});
        }

        // Dvd ratings
        if (!userId && dvdId) {
            ratings = await Rating.findAll( {where: {dvdId}});
        }

        if (userId && dvdId) {
            ratings = await Rating.findAll( {where: {userId, dvdId}});
        }

        return res.json(ratings);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const rating = await Rating.findOne({
            where: {id}
        });
        return res.json(rating);
    }
}

module.exports = new RatingController();