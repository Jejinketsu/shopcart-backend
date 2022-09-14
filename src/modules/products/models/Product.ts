import { v4 as uuidv4 } from "uuid";

interface IProduct {
  name: string;
  tag?: string;
  unity: string;
  market?: string;
}

class Product {
  id!: string;
  name: string;
  tag!: string;
  unity: string;
  market!: string;

  constructor({ name, tag, unity, market }: IProduct) {
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.unity = unity;

    if (tag) this.tag = tag;
    if (market) this.market = market;
  }
}

export { Product };
