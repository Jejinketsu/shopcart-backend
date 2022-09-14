import { TransactionRepository } from "../../repositories/implementations/TransactionRepository";
import { ListTransactionsController } from "./ListTransactionController";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase";

const transactionRepository = TransactionRepository.getInstance();
const listTransactionsUseCase = new ListTransactionsUseCase(
  transactionRepository
);
const listTransactionsController = new ListTransactionsController(
  listTransactionsUseCase
);

export { listTransactionsController };
