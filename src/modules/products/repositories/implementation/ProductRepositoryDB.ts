import { PrismaClient } from "@prisma/client";
import { Product } from "../../models/Product";
import { ICreateProductDTO, IProductRepository } from "../IProductRepositoryDB";

class ProductRepository implements IProductRepository {
  private prisma: PrismaClient;

  private static INSTANCE: ProductRepository;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): ProductRepository {
    if (!ProductRepository.INSTANCE) {
      ProductRepository.INSTANCE = new ProductRepository();
    }
    return ProductRepository.INSTANCE;
  }

  async create(data: ICreateProductDTO): Promise<void> {
    const product = new Product(data);
    const result = await this.prisma.products.create({
      data: {
        name: product.name,
        tag: product.tag,
        market: product.market,
        unity: {
          connect: {
            id: product.unityId,
          },
        },
      },
    });
    console.log("result", result);
  }

  async createMany(data: ICreateProductDTO[]): Promise<void> {
    const promises = data.map(async (product) => {
      const newProduct = new Product(product);
      await this.prisma.products.create({
        data: {
          name: newProduct.name,
          tag: newProduct.tag,
          unityId: newProduct.unityId,
          market: newProduct.market,
        },
      });
    });

    await Promise.all(promises);
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.prisma.products.findFirst({
      where: {
        name: name,
      },
    });

    if (product) {
      return new Product(product);
    }
    return undefined;
  }

  async list(): Promise<Product[]> {
    const products = await this.prisma.products.findMany();
    const productsList = products.map((product) => new Product(product));
    return productsList;
  }
}

export { ProductRepository };
