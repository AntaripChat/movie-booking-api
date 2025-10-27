import { Express } from "express";
import { registerUserRoutes } from "./user.routes";
import { registerMovieRoutes } from "./movie.routes";

export const registerRoutes = (app: Express) => {
    registerUserRoutes(app);
    registerMovieRoutes(app);
    // Add more route registrations here as you create them
};