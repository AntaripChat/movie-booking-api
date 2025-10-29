"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const user_routes_1 = require("./user.routes");
const movie_routes_1 = require("./movie.routes");
const registerRoutes = (app) => {
    (0, user_routes_1.registerUserRoutes)(app);
    (0, movie_routes_1.registerMovieRoutes)(app);
    // Add more route registrations here as you create them
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map