import { movieController } from "../controller/movie.controller";
import { Express } from "express";

export const registerMovieRoutes = (app: Express) => {
    app.get('/movies', movieController);
}