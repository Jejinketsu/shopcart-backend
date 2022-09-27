import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const newId = Number(id);

      const user = await this.getUserByIdUseCase.execute(newId);

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { GetUserByIdController };
