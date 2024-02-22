import { Creator } from "./creator.class";
import { ConcreteCreator1 } from "./creators/concrete-creator-1.class";
import { ConcreteCreator2 } from "./creators/concrete-creator-2.class";

export function initializeFactory(product: 1 | 2) {
  let creator: Creator;

  if (product === 1) {
    creator = new ConcreteCreator1();
  } else if (product === 2) {
    creator = new ConcreteCreator2();
  } else {
    throw new Error("Error! Unknown product type");
  }

  creator.doSomeLogicWithTheProduct();
}
