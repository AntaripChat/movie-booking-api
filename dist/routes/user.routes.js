"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserRoutes = void 0;
const user_controller_1 = require("../controller/user.controller");
const registerUserRoutes = (app) => {
    app.get('/', user_controller_1.welcomeUser);
};
exports.registerUserRoutes = registerUserRoutes;
//# sourceMappingURL=user.routes.js.map