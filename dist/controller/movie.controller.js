"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieById = exports.movieController = void 0;
const movieController = (_req, res) => {
    res.json({
        movies: [
            { id: 1, title: "Inception", director: "Christopher Nolan" },
            { id: 2, title: "The Matrix", director: "The Wachowskis" },
            { id: 3, title: "Interstellar", director: "Christopher Nolan" }
        ],
        status: "success"
    });
};
exports.movieController = movieController;
const getMovieById = (req, res) => {
    const idParam = req.params.id;
    if (!idParam) {
        res.status(400).json({ message: "Missing movie id", status: "error" });
        return;
    }
    const movieId = parseInt(idParam, 10);
    if (Number.isNaN(movieId)) {
        res.status(400).json({ message: "Invalid movie id", status: "error" });
        return;
    }
    const movies = [
        { id: 1, title: "Inception", director: "Christopher Nolan" },
        { id: 2, title: "The Matrix", director: "The Wachowskis" },
        { id: 3, title: "Interstellar", director: "Christopher Nolan" }
    ];
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        res.json({ movie, status: "success" });
    }
    else {
        res.status(404).json({ message: "Movie not found", status: "error" });
    }
};
exports.getMovieById = getMovieById;
//# sourceMappingURL=movie.controller.js.map