import { Creator } from "../creator.class";
import { Product } from "../product.interface";
import { ConcreteProduct2 } from "../products/concrete-product-2.class";

export class ConcreteCreator2 extends Creator {
  creatorFunction(): Product {
    return new ConcreteProduct2();
  }
}
