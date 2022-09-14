import { v4 as uuidv4 } from "uuid";

interface ITransaction {
  userId: string;
  purchaseId: string;
  productId: string;
  price: number;
  quantity: number;
  local: string;
}

class Transaction {
  id!: string;
  userId: string;
  purchaseId: string;
  productId: string;
  price: number;
  quantity: number;
  timestamp!: Date;
  local: string;

  constructor({
    userId,
    purchaseId,
    productId,
    price,
    quantity,
    local,
  }: ITransaction) {
    if (!this.id) this.id = uuidv4();
    if (!this.timestamp) this.timestamp = new Date();

    this.userId = userId;
    this.purchaseId = purchaseId;
    this.productId = productId;
    this.price = price;
    this.quantity = quantity;
    this.local = local;
  }
}

export { Transaction };
