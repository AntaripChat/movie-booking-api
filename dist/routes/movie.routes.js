"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMovieRoutes = void 0;
const movie_controller_1 = require("../controller/movie.controller");
const registerMovieRoutes = (app) => {
    app.get('/movies', movie_controller_1.movieController);
    app.get('/movies/:id', movie_controller_1.getMovieById);
};
exports.registerMovieRoutes = registerMovieRoutes;
//# sourceMappingURL=movie.routes.js.map