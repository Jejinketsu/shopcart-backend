import { Request, Response } from "express";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

class CreatePurchaseController {
  constructor(private createPurchaseUseCase: CreatePurchaseUseCase) {}

  handle(request: Request, response: Response): Response {
    const {
      name,
      budget,
      released_Budget,
      userId,
      statusId,
      created_At,
      finished_At,
      products,
      transactions,
    } = request.body;

    this.createPurchaseUseCase.execute({
      name,
      budget,
      released_Budget,
      userId,
      statusId,
      created_At,
      finished_At,
      products,
      transactions,
    });

    return response.status(201).send();
  }
}

export { CreatePurchaseController };
