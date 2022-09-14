import { Request, Response } from "express";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase";

class ListTransactionsController {
  constructor(private listTransactionsUseCase: ListTransactionsUseCase) {}

  handle(request: Request, response: Response): Response {
    const transactions = this.listTransactionsUseCase.execute();

    return response.json(transactions);
  }
}

export { ListTransactionsController };
