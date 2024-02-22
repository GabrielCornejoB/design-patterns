import { Creator } from "../creator.class";
import { Product } from "../product.interface";
import { ConcreteProduct1 } from "../products/concrete-product-1.class";

export class ConcreteCreator1 extends Creator {
  creatorFunction(): Product {
    return new ConcreteProduct1();
  }
}
