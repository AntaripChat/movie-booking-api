import { movieController,getMovieById } from "../controller/movie.controller";
import { Express } from "express";

export const registerMovieRoutes = (app: Express) => {
    app.get('/movies', movieController);
    app.get('/movies/:id', getMovieById);
}