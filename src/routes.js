  
const { Router } = require('express');
const MoviesController = require('./controllers/MovieController');

const routes = Router();

routes.get('/movies/latest', MoviesController.index);

module.exports = routes;
