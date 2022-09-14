import { Router } from "express";

import { createPurchaseController } from "../modules/purchases/useCases/createPurchase";
import { listPurchasesController } from "../modules/purchases/useCases/listPurchase";

const purchasesRouter = Router();

purchasesRouter.post("/", (request, response) => {
  return createPurchaseController.handle(request, response);
});

purchasesRouter.get("/", (request, response) => {
  return listPurchasesController.handle(request, response);
});

export { purchasesRouter };
