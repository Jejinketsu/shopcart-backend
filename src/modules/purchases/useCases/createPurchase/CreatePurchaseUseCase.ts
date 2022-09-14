import { IProductRepository } from "../../../products/repositories/IProductRepository";
import { IPurchaseRepository } from "../../repositories/IPurchaseRepository";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

interface IRequest {
  name: string;
  budget: number;
  released_Budget?: number;
  userId: string;
  statusId?: number;
  created_At: Date;
  finished_At?: Date;
  products: {
    id: string;
    name: string;
    tag?: string;
    unity: string;
    market?: string;
  }[];
  transactions: {
    productId: string;
    price: number;
    quantity: number;
    local: string;
  }[];
}

class CreatePurchaseUseCase {
  constructor(
    private purchaseRepository: IPurchaseRepository,
    private productRepository: IProductRepository,
    private transactionRepository: ITransactionRepository
  ) {}

  execute({
    name,
    budget,
    released_Budget,
    userId,
    statusId,
    created_At,
    finished_At,
    products,
    transactions,
  }: IRequest) {
    const purchaseId = this.purchaseRepository.create({
      name,
      budget,
      released_Budget,
      userId,
      statusId,
      created_At,
      finished_At,
    });

    this.productRepository.createMany(
      products.map((product) => {
        const { name, tag, unity, market } = product;
        return { name, tag, unity, market };
      })
    );

    this.transactionRepository.createMany(
      transactions.map((transaction) => {
        const { price, quantity, productId, local } = transaction;
        return { userId, purchaseId, productId, price, quantity, local };
      })
    );
  }
}

export { CreatePurchaseUseCase };
