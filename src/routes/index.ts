import { Router } from "express";
import { usersRouter } from "./users.routes";
import { productsRouter } from "./products.routes";
import { purchasesRouter } from "./purchases.routes";
import { transactionsRouter } from "./transactions.routes";
import { authRoutes } from "./auth.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", authRoutes);
routes.use("/products", productsRouter);
routes.use("/purchases", purchasesRouter);
routes.use("/transactions", transactionsRouter);

export { routes };
