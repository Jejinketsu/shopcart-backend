import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listProductsUseCase.execute();
      return response.json(all);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { ListProductsController };
