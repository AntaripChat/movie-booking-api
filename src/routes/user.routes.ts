import { welcomeUser } from "../controller/user.controller";
import { Express } from "express";

export const registerUserRoutes = (app: Express) => {
    app.get('/', welcomeUser);
}