import { Router } from "express";
import { productsRouter } from "./products.routes";
import { purchasesRouter } from "./purchases.routes";
import { transactionsRouter } from "./transactions.routes";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/purchases", purchasesRouter);
routes.use("/transactions", transactionsRouter);

export { routes };
