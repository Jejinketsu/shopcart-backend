import { Product } from "../../models/Product";
import { IProductRepository } from "../../repositories/IProductRepositoryDB";

class ListProductsUseCase {
  constructor(private productsRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.list();
    return products;
  }
}

export { ListProductsUseCase };
