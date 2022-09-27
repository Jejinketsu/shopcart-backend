import * as dotenv from "dotenv";

import express from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { routes } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => console.log(`Server listen on port ${3333}!`));
