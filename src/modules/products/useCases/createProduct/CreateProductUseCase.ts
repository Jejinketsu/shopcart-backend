import { AppError } from "../../../../errors/AppError";
import { IProductRepository } from "../../repositories/IProductRepositoryDB";

interface IRequest {
  name: string;
  tag?: string;
  unityId: number;
  market?: string;
}

class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({ name, tag, unityId, market }: IRequest) {
    const productAlreadyExists = await this.productRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists!");
    }

    await this.productRepository.create({ name, tag, unityId, market });
  }
}

export { CreateProductUseCase };
