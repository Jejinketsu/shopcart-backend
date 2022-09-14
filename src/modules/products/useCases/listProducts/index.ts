import { ProductRepository } from "../../repositories/implementation/ProductRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const producstRepository = ProductRepository.getInstance();
const listProductsUseCase = new ListProductsUseCase(producstRepository);
const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsController };
