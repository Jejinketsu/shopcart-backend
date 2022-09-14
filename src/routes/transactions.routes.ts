import { Router } from "express";
import { listTransactionsController } from "../modules/purchases/useCases/listTransactions";

const transactionsRouter = Router();

transactionsRouter.get("/", (request, response) => {
  return listTransactionsController.handle(request, response);
});

export { transactionsRouter };
