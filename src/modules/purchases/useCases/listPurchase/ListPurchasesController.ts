import { Request, Response } from "express";
import { ListPurchasesUseCase } from "./ListPurchasesUseCase";

class ListPurchasesController {
  constructor(private listPurchasesUseCase: ListPurchasesUseCase) {}

  handle(request: Request, response: Response): Response {
    const purchases = this.listPurchasesUseCase.execute();

    return response.json(purchases);
  }
}

export { ListPurchasesController };
