import { Request,Response } from "express";

export const welcomeUser = (_req: Request, res: Response) => {
    res.send("Welcome to the Movie Booking App API...........!");
}