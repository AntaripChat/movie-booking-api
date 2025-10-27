import express from 'express';
import { registerRoutes } from './routes'; 
import { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register all routes in one line
registerRoutes(app);

// FIX: Use middleware instead of app.all('*')
app.use((req: Request, res: Response) => {
    console.log(`Received a request at ${req.ip} for path: ${req.path}`);
    res.json({
        message: 'This endpoint is not real - just for demonstration',
        requestedPath: req.path,
        method: req.method,
        tip: 'Check the API documentation for available endpoints'
    });
});

export default app;