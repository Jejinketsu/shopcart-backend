import { Product } from "../../models/Product";
import { ICreateProductDTO, IProductRepository } from "../IProductRepository";

class ProductRepository implements IProductRepository {
  private products: Product[];

  private static INSTANCE: ProductRepository;

  private constructor() {
    this.products = [];
  }

  public static getInstance(): ProductRepository {
    if (!ProductRepository.INSTANCE) {
      ProductRepository.INSTANCE = new ProductRepository();
    }
    return ProductRepository.INSTANCE;
  }

  create(data: ICreateProductDTO): void {
    const product = new Product(data);
    this.products.push(product);
  }
  createMany(data: ICreateProductDTO[]): void {
    data.forEach((product) => {
      const newProduct = new Product(product);
      this.products.push(newProduct);
    });
  }
  findByName(name: string): Product | undefined {
    const product = this.products.find((product) => product.name === name);
    return product;
  }
  list(): Product[] {
    return this.products;
  }
}

export { ProductRepository };
