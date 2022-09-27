import { Product } from "../models/Product";

interface ICreateProductDTO {
  name: string;
  tag?: string;
  unityId: number;
  market?: string;
}

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>;
  createMany(data: ICreateProductDTO[]): Promise<void>;
  findByName(name: string): Promise<Product | undefined>;
  list(): Promise<Product[]>;
}

export { IProductRepository, ICreateProductDTO };
