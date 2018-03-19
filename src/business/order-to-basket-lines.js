import { countBy, uniq, find } from "ramda";

export default function OrderToBasketLines(orderList, pizzas) {
  const uniqueOrder = uniq(orderList);
  const orderNumber = countBy(i => i)(orderList);
  const basketLinesData = uniqueOrder.map(id => {
    const pizza = find(pizza => pizza.id === id)(pizzas);
    return {
      id,
      title: pizza.title,
      price: pizza.price * orderNumber[id],
      currency: pizza.currency,
      number: orderNumber[id]
    };
  });
  return basketLinesData;
}
