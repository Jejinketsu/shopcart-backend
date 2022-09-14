import { IProductRepository } from "../../repositories/IProductRepository";

interface IRequest {
  name: string;
  tag?: string;
  unity: string;
  market?: string;
}

class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  execute({ name, tag, unity, market }: IRequest) {
    const productAlreadyExists = this.productRepository.findByName(name);

    if (productAlreadyExists) {
      throw new Error("Product already exists!");
    }

    this.productRepository.create({ name, tag, unity, market });
  }
}

export { CreateProductUseCase };
