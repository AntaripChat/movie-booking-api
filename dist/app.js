"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Register all routes in one line
(0, routes_1.registerRoutes)(app);
// FIX: Use middleware instead of app.all('*')
app.use((req, res) => {
    console.log(`Received a request at ${req.ip} for path: ${req.path}`);
    res.json({
        message: 'This endpoint is not real - just for demonstration',
        requestedPath: req.path,
        method: req.method,
        tip: 'Check the API documentation for available endpoints'
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map