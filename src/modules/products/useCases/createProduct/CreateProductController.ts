import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, tag, unityId, market } = request.body;
    try {
      await this.createProductUseCase.execute({ name, tag, unityId, market });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { CreateProductController };
