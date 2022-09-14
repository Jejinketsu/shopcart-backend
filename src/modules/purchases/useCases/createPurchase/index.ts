import { ProductRepository } from "../../../products/repositories/implementation/ProductRepository";
import { PurchaseRepository } from "../../repositories/implementations/PurchaseRepository";
import { TransactionRepository } from "../../repositories/implementations/TransactionRepository";
import { CreatePurchaseController } from "./CreatePurchaseController";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

const purchaseRepository = PurchaseRepository.getInstance();
const productRepository = ProductRepository.getInstance();
const transactionRepository = TransactionRepository.getInstance();
const createPurchaseUseCase = new CreatePurchaseUseCase(
  purchaseRepository,
  productRepository,
  transactionRepository
);
const createPurchaseController = new CreatePurchaseController(
  createPurchaseUseCase
);

export { createPurchaseController };
