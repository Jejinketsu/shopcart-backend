import { Product } from "../../models/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

class ListProductsUseCase {
  constructor(private productsRepository: IProductRepository) {}

  execute(): Product[] {
    const products = this.productsRepository.list();

    return products;
  }
}

export { ListProductsUseCase };
