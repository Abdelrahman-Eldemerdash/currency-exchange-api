import express from 'express';
import rateLimit from 'express-rate-limit';
const app = express();
const PORT = 5000;
import { router } from './routes/exchangeRate.js'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 50, // Limit each IP to 10 requests per window (10 minutes)
    message: 'Too many requests from this IP, please try again later.',
    headers: true, // Send rate limit info in the headers
});
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Currency exchnage API",
            version: "1.0.0",
            description: "Simple Currency exchnage system"
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }

        ],

    },
    apis: ["./routes/*.js"]
}
const specs = swaggerJSDoc(options);
app.use(express.json());
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));
app.use('/api/', apiLimiter);//To apply the limit for api route
app.listen(PORT, () => { console.log(`Server running on port : http://localhost:${PORT}`) });
app.use("/", router);


