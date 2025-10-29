import { signUpUser,signInUser } from "../controller/user.controller";
import { Express } from "express";

export const registerUserRoutes = (app: Express) => {
    app.post('/sign', signUpUser);
    app.post('/signin', signInUser);
}