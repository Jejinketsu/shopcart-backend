import { PurchaseRepository } from "../../repositories/implementations/PurchaseRepository";
import { ListPurchasesController } from "./ListPurchasesController";
import { ListPurchasesUseCase } from "./ListPurchasesUseCase";

const pruchaseRepository = PurchaseRepository.getInstance();
const listPurchasesUseCase = new ListPurchasesUseCase(pruchaseRepository);
const listPurchasesController = new ListPurchasesController(
  listPurchasesUseCase
);

export { listPurchasesController };
