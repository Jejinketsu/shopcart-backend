import { Product } from "../models/Product";

interface ICreateProductDTO {
  name: string;
  tag?: string;
  unity: string;
  market?: string;
}

interface IProductRepository {
  create(data: ICreateProductDTO): void;
  createMany(data: ICreateProductDTO[]): void;
  findByName(name: string): Product | undefined;
  list(): Product[];
}

export { IProductRepository, ICreateProductDTO };
