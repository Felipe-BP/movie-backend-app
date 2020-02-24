const MovieService = require('../services/MovieService');

module.exports = {
    async index(req, res) {
        const latestMovies = await MovieService.latestMovies();

        res.json(latestMovies);
    }
}