import { Router } from "express";
import { createProductController } from "../modules/products/useCases/createProduct";
import { listProductsController } from "../modules/products/useCases/listProducts";

const productsRouter = Router();

productsRouter.post("/", (request, response) => {
  return createProductController.handle(request, response);
});

productsRouter.get("/", (request, response) => {
  return listProductsController.handle(request, response);
});

export { productsRouter };
